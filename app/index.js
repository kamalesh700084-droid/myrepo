
// CI Test 
console.log("Running Application Logic...");

if (process.env.NODE_ENV === 'ci') {
    console.log("SUCCESS: NODE_ENV is set to 'ci'");
} else {
    console.log("WARNING: NODE_ENV is NOT 'ci'");
}
