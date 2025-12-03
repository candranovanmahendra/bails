// ===== ENGINE CHECK DISABLED =====
// Original requirement: Node.js 20+
// Modified to allow Node.js 16/18/20+
// — by Gibrane 😎

const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.log(
    `⚠️ Warning: This module normally requires Node 20+, but engine check is bypassed.\n` +
    `   You're running Node.js ${process.versions.node}. Continuing anyway... 🚀`
  );
} else {
  console.log(`🟢 Node Version OK (${process.versions.node})`);
}
