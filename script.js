
new window.IntaSend({
    publicAPIKey: "ISPubKey_test_850d21ed-41b4-419e-bf7f-c708616728b1",
    live: false, //set to true when going live
  })
    .on("COMPLETE", (results) =>
      console.log("Do something on success", results)
    )
    .on("FAILED", (results) =>
      console.log("Do something on failure", results)
    )
    .on("IN-PROGRESS", (results) =>
      console.log("Payment in progress status", results)
    );

