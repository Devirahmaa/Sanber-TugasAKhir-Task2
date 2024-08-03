describe('App Launch', () => {
    it('should open the app and display the home screen', async () => {
        const homeScreenElement = await $('~HomeScreenElement'); // Replace with actual selector
        await expect(homeScreenElement).toBeDisplayed();
    });
});
