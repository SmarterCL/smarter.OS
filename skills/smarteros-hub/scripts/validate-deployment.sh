#!/bin/bash
# Smarter OS Deployment Validator
# Validates deployment readiness for production

set -e

echo "🧠 Smarter OS - Deployment Validator"
echo "======================================"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check counters
PASSED=0
FAILED=0
WARNINGS=0

check_pass() {
    echo -e "${GREEN}✓${NC} $1"
    PASSED=$((PASSED + 1))
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
    FAILED=$((FAILED + 1))
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
    WARNINGS=$((WARNINGS + 1))
}

# 1. Check Node.js version
echo ""
echo "📦 Runtime Checks"
echo "----------------"

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 24 ]; then
    check_pass "Node.js version: $NODE_VERSION (required: >=24)"
else
    check_fail "Node.js version: $NODE_VERSION (required: >=24)"
fi

# 2. Check dependencies
if [ -f "pnpm-lock.yaml" ]; then
    check_pass "pnpm dependencies locked"
elif [ -f "package-lock.json" ]; then
    check_warn "npm lockfile found (pnpm recommended)"
else
    check_fail "No lockfile found"
fi

# 3. Check environment
echo ""
echo "🔐 Environment Checks"
echo "--------------------"

if [ -f ".env.local" ] || [ -f ".env" ]; then
    check_pass "Environment file exists"
    
    if grep -q "NEXT_PUBLIC_SITE_URL" .env.local 2>/dev/null || grep -q "NEXT_PUBLIC_SITE_URL" .env 2>/dev/null; then
        check_pass "NEXT_PUBLIC_SITE_URL configured"
    else
        check_fail "NEXT_PUBLIC_SITE_URL not configured"
    fi
else
    check_warn "No .env file found (create from .env.example)"
fi

# 4. Check build
echo ""
echo "🔨 Build Check"
echo "-------------"

if [ -d ".next" ]; then
    check_pass "Next.js build exists"
else
    check_warn ".next directory not found (run 'npm run build')"
fi

# 5. Check critical files
echo ""
echo "📁 Critical Files"
echo "----------------"

CRITICAL_FILES=("app/page.tsx" "app/layout.tsx" "package.json" "tsconfig.json" "ARCHITECTURE.md")

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        check_pass "$file exists"
    else
        check_fail "$file missing"
    fi
done

# 6. Check skills directory
echo ""
echo "🎯 Agent Skills"
echo "--------------"

if [ -d "skills" ]; then
    check_pass "Skills directory exists"
    
    SKILL_COUNT=$(find skills -name "SKILL.md" | wc -l | tr -d ' ')
    if [ "$SKILL_COUNT" -gt 0 ]; then
        check_pass "Found $SKILL_COUNT skill(s)"
    else
        check_warn "No SKILL.md files found"
    fi
else
    check_warn "Skills directory not found"
fi

# Summary
echo ""
echo "======================"
echo "📊 Summary"
echo "======================"
echo -e "${GREEN}Passed: $PASSED${NC}"
if [ "$WARNINGS" -gt 0 ]; then
    echo -e "${YELLOW}Warnings: $WARNINGS${NC}"
fi
if [ "$FAILED" -gt 0 ]; then
    echo -e "${RED}Failed: $FAILED${NC}"
fi

echo ""

if [ "$FAILED" -gt 0 ]; then
    echo -e "${RED}❌ Deployment validation FAILED${NC}"
    exit 1
elif [ "$WARNINGS" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Deployment validation passed with warnings${NC}"
    exit 0
else
    echo -e "${GREEN}✅ Deployment validation PASSED${NC}"
    exit 0
fi
