console.log("--- STARTING APP ---");

if (process.env.NODE_ENV === 'ci') {
    console.log("SUCCESS: NODE_ENV is successfully set to 'ci'");
} else {
    console.log("FAILURE: NODE_ENV is NOT 'ci'");
    process.exit(1); // Fail the workflow
}
