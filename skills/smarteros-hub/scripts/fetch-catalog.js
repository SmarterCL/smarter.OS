#!/usr/bin/env node
/**
 * Smarter OS Catalog Fetcher
 * 
 * Fetches product catalog from backend hub with arbitrage data
 * Usage: node scripts/fetch-catalog.js [sandbox|production]
 */

const https = require('https');

// Configuration
const ENVIRONMENTS = {
  sandbox: 'https://sandbox.smarterbot.cl',
  production: 'https://api.smarterbot.cl'
};

const DEFAULT_ENV = process.argv[2] || 'sandbox';

/**
 * Fetch catalog from backend hub
 * @param {string} baseUrl - Backend URL
 * @returns {Promise<Array>} Catalog items
 */
async function fetchCatalog(baseUrl) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/v1/hub/catalog`;
    console.log(`📡 Fetching catalog from: ${url}`);
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const catalog = JSON.parse(data);
            resolve(catalog);
          } catch (e) {
            reject(new Error('Failed to parse JSON response'));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Display catalog in formatted table
 * @param {Array} catalog - Catalog items
 */
function displayCatalog(catalog) {
  console.log('\n🧠 Smarter OS Catalog\n');
  console.log('='.repeat(80));
  console.log(
    'PRODUCT'.padEnd(25),
    'SOURCE'.padEnd(10),
    'PRICE (CLP)'.padEnd(15),
    'STOCK'.padEnd(10),
    'LEAD TIME'
  );
  console.log('='.repeat(80));
  
  catalog.forEach(item => {
    console.log(
      (item.name || item.product_id).padEnd(25),
      (item.recommended_source || 'N/A').padEnd(10),
      (item.final_price?.toLocaleString('es-CL') || 'N/A').padEnd(15),
      (item.stock_available ? '✓ Yes' : '✗ No').padEnd(10),
      item.lead_time || 'N/A'
    );
  });
  
  console.log('='.repeat(80));
  console.log(`\nTotal products: ${catalog.length}`);
}

/**
 * Main execution
 */
async function main() {
  console.log(`🚀 Environment: ${DEFAULT_ENV}\n`);
  
  try {
    const baseUrl = ENVIRONMENTS[DEFAULT_ENV];
    
    if (!baseUrl) {
      console.error(`❌ Unknown environment: ${DEFAULT_ENV}`);
      console.error('Available: sandbox, production');
      process.exit(1);
    }
    
    const catalog = await fetchCatalog(baseUrl);
    displayCatalog(catalog);
    
    // Export to JSON file
    const fs = require('fs');
    const outputPath = './catalog-export.json';
    fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2));
    console.log(`\n💾 Exported to: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
