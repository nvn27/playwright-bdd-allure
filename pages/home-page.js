class HomePage {

    constructor(page) {
        this.page = page
        this.pageHeading = page.locator('.heading');

        this.linkabtesting = page.locator("//a[string()='A/B Testing']");
        this.linkaddremoveelements = page.locator("//a[string()='Add/Remove Elements']");
        this.linkbasicauth = page.locator("//a[string()='Basic Auth']");
        this.linkbrokenimages = page.locator("//a[string()='Broken Images']");
        this.linkchallengingdom = page.locator("//a[string()='Challenging DOM']");
        this.linkcheckboxes = page.locator("//a[string()='Checkboxes']");
        this.linkcontextmenu = page.locator("//a[string()='Context Menu']");
        this.linkdigestauthentication = page.locator("//a[string()='Digest Authentication']");
        this.linkdisappearingelements = page.locator("//a[string()='Disappearing Elements']");
        this.linkdraganddrop = page.locator("//a[string()='Drag and Drop']");
        this.linkdropdown = page.locator("//a[string()='Dropdown']");
        this.linkdynamiccontent = page.locator("//a[string()='Dynamic Content']");
        this.linkdynamiccontrols = page.locator("//a[string()='Dynamic Controls']");
        this.linkdynamicloading = page.locator("//a[string()='Dynamic Loading']");
        this.linkentryad = page.locator("//a[string()='Entry Ad']");
        this.linkexitintent = page.locator("//a[string()='Exit Intent']");
        this.linkfiledownload = page.locator("//a[string()='File Download']");
        this.linkfileupload = page.locator("//a[string()='File Upload']");
        this.linkfloatingmenu = page.locator("//a[string()='Floating Menu']");
        this.linkforgotpassword = page.locator("//a[string()='Forgot Password']");
        this.linkformauthentication = page.locator("//a[string()='Form Authentication']");
        this.linkframes = page.locator("//a[string()='Frames']");
        this.linkgeolocation = page.locator("//a[string()='Geolocation']");
        this.linkhorizontalslider = page.locator("//a[string()='Horizontal Slider']");
        this.linkhovers = page.locator("//a[string()='Hovers']");
        this.linkinfinitescroll = page.locator("//a[string()='Infinite Scroll']");
        this.linkinputs = page.locator("//a[string()='Inputs']");
        this.linkjqueryuimenus = page.locator("//a[string()='JQuery UI Menus']");
        this.linkjavascriptalerts = page.locator("//a[string()='JavaScript Alerts']");
        this.linkjavascriptonloadeventerror = page.locator("//a[string()='JavaScript onload event error']");
        this.linkkeypresses = page.locator("//a[string()='Key Presses']");
        this.linklargeNdeepdom = page.locator("//a[string()='Large & Deep DOM']");
        this.linkmultiplewindows = page.locator("//a[string()='Multiple Windows']");
        this.linknestedframes = page.locator("//a[string()='Nested Frames']");
        this.linknotificationmessages = page.locator("//a[string()='Notification Messages']");
        this.linkredirectlink = page.locator("//a[string()='Redirect Link']");
        this.linksecurefiledownload = page.locator("//a[string()='Secure File Download']");
        this.linkshadowdom = page.locator("//a[string()='Shadow DOM']");
        this.linkshiftingcontent = page.locator("//a[string()='Shifting Content']");
        this.linkslowresources = page.locator("//a[string()='Slow Resources']");
        this.linksortabledatatables = page.locator("//a[string()='Sortable Data Tables']");
        this.linkstatuscodes = page.locator("//a[string()='Status Codes']");
        this.linktypos = page.locator("//a[string()='Typos']");
        this.wysiwygeditor = page.locator("//a[string()='WYSIWYG Editor']");
    }

    async getPageHeading() {
        return await this.pageHeading.textContent();
    }

    async clickABTesting() {
        await this.linkabtesting.click();
    }
}

module.exports = HomePage;