# Smarter OS Agent Skills

Agent Skills integration for Smarter OS - the Chilean commercial operating system for digital businesses.

## 📁 Installed Skills

### Custom Skills

| Skill | Location | Description |
|-------|----------|-------------|
| **smarteros-hub** | `./skills/smarteros-hub/` | Smarter OS backend integration (Supabase, n8n, Odoo, SII) |

### Vercel Skills

| Skill | Location | Description |
|-------|----------|-------------|
| **vercel-react-best-practices** | `./.agents/skills/vercel-react-best-practices/` | 58 React/Next.js performance rules from Vercel Engineering |
| **vercel-composition-patterns** | `./.agents/skills/vercel-composition-patterns/` | React composition patterns to avoid boolean prop proliferation |
| **vercel-react-native-skills** | `./.agents/skills/vercel-react-native-skills/` | React Native best practices (16 rules, 7 sections) |
| **web-design-guidelines** | `./.agents/skills/web-design-guidelines/` | UI code audit for 100+ accessibility/performance/UX rules |

---

## 🎯 SmarterOS Hub Skill

**Purpose**: Connect AI agents to Smarter OS backend infrastructure

**Capabilities**:
- Backend Hub API integration (`/v1/hub/catalog`)
- Real-time pricing arbitrage (CL/AR)
- Supabase database operations
- n8n workflow automation
- Odoo V19 ERP operations
- Chatwoot omnichannel integration
- SII/Sercotec compliance

**When to Use**:
- Fetch product catalog with optimized pricing
- Process orders through backend hub
- Onboard customers to plans (startup, comercio, empresa)
- Query analytics and KPIs
- Integrate with Chilean tax systems

---

## 🚀 Usage

### For AI Agents

Agents supporting Agent Skills will automatically discover and use these skills:

1. **Discovery**: Agent loads `SKILL.md` metadata (name + description)
2. **Activation**: When task matches skill description, full instructions loaded
3. **Execution**: Agent follows instructions, runs scripts, or references docs

### For Developers

```bash
# Validate deployment readiness
./skills/smarteros-hub/scripts/validate-deployment.sh

# Fetch catalog from sandbox
node skills/smarteros-hub/scripts/fetch-catalog.js sandbox

# List all installed skills
npx skills list
```

---

## 📋 Skill Structure

### SmarterOS Hub

```
skills/smarteros-hub/
├── SKILL.md                    # Core instructions & metadata
├── scripts/
│   ├── validate-deployment.sh  # Deployment validator
│   └── fetch-catalog.js        # Catalog fetcher
├── references/
│   └── API.md                  # Complete API reference
└── assets/                     # Static resources (templates, images)
```

### Vercel Skills

```
.agents/skills/
├── vercel-react-best-practices/
├── vercel-composition-patterns/
├── vercel-react-native-skills/
└── web-design-guidelines/
```

---

## 🔧 Adding New Skills

### From GitHub

```bash
npx skills add <owner>/<repo>
```

### Manual Installation

1. Create directory: `skills/{skill-name}/` or `.agents/skills/{skill-name}/`
2. Add `SKILL.md` with required frontmatter:
   ```yaml
   ---
   name: skill-name
   description: What it does and when to use
   ---
   ```
3. Add optional `scripts/`, `references/`, `assets/` directories
4. Validate naming: lowercase, alphanumeric + hyphens only

---

## 📖 Documentation

### SmarterOS
- [SKILL.md](./skills/smarteros-hub/SKILL.md) - Complete skill instructions
- [API Reference](./skills/smarteros-hub/references/API.md) - Backend API documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Frontend architecture
- [README.md](./README.md) - Project overview

### Agent Skills
- [Specification](https://agentskills.io/specification) - Complete format spec
- [What are Skills?](https://agentskills.io/what-are-skills) - Introduction
- [Vercel Skills](https://github.com/vercel-labs/agent-skills) - Source repository

---

## 🧪 Testing

```bash
# Run deployment validation
./skills/smarteros-hub/scripts/validate-deployment.sh

# Expected output:
# ✓ Node.js version: 24+
# ✓ pnpm dependencies locked
# ✓ Environment file exists
# ✓ Skills directory exists
# ✓ Found 1 skill(s)
# ✅ Deployment validation PASSED
```

---

## 🤝 Supported Agents

Skills are installed and symlinked for:

| Agent | Status |
|-------|--------|
| **Antigravity** | ✅ Symlinked |
| **Claude Code** | ✅ Symlinked |
| **Codex** | ✅ Universal |
| **Gemini CLI** | ✅ Universal |
| **GitHub Copilot** | ✅ Universal |
| **Kiro CLI** | ✅ Symlinked |
| **OpenCode** | ✅ Universal |
| **OpenClaw** | ✅ Symlinked |
| **Qwen Code** | ✅ Symlinked |
| **Windsurf** | ✅ Symlinked |
| **Zencoder** | ✅ Symlinked |

---

## 📄 License

MIT - See [LICENSE](./LICENSE) for details.

Vercel skills are licensed under MIT (see individual skill licenses).
