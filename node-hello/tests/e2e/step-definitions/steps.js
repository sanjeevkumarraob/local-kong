const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//launch url
// const url = 'http://localhost:8000/profile'

// start api tests

Given('a user has navigated to the profile endpoint', async function () {
   // navigate to the app
   const profile = await request.get("/profile");
   // assert that it is success
   expect(profile.ok()).toBeTruthy();
});

Then ('a result for {string} should be present', async function(name){
    // navigate to the app
   const profile = await request.get("/profile");
   // assert that it is success
   expect(profile.ok()).toBeTruthy();
   expect(await profile.json()).toContainEqual(expect.objectContaining({
    name: name
  }));
});

Then('I create a new profile for {string} with id {string}', async function (name, id) {
    const profileData = {
            "id": id,
            "name": name
        };
    const profile = await request.post("/profile", {
        data: profileData
    });
    // assert that it is success
    expect(profile.ok()).toBeTruthy();
});

Then('I should get {string} data in profile list for id {string}', async function (name, id) {
    const profile = await request.get("/profile");
    // assert that it is success
    expect(profile.ok()).toBeTruthy();
    expect(await profile.json()).toContainEqual(expect.objectContaining({
        id: id,
        name: name
    }));
});

Then('I add description as {string} to the profile using id {string}', async function (description, id) {
    const profile = await request.get(`/profile/${id}`);
    const data = profile.json();
    data.description = description;
    const updatedProfile = await request.put(`/profile/${id}`, {
        data: data
    });
    // assert that it is success
    expect(updatedProfile.ok()).toBeTruthy();
});

Then('I remove the user using id {string}', async function(id) {
    const profile = await request.delete(`/profile/${id}`);
     expect(profile.ok()).toBeTruthy();
});