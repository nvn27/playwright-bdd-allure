class HomePage {

    constructor(page) {
        this.page = page
        this.pageHeading = page.locator('.heading');

        this.linkabtesting = page.getByText('A/B Testing');
        this.linkaddremoveelements = page.getByText('Add/Remove Elements');
        this.linkbasicauth = page.getByText('Basic Auth (user and pass: admin)');
        this.linkbrokenimages = page.getByText('Broken Images');
        this.linkchallengingdom = page.getByText('Challenging DOM');
        this.linkcheckboxes = page.getByText('Checkboxes');
        this.linkcontextmenu = page.getByText('Context Menu');
        this.linkdigestauthentication = page.getByText('Digest Authentication (user and pass: admin)');
        this.linkdisappearingelements = page.getByText('Disappearing Elements');
        this.linkdraganddrop = page.getByText('Drag and Drop');
        this.linkdropdown = page.getByText('Dropdown');
        this.linkdynamiccontent = page.getByText('Dynamic Content');
        this.linkdynamiccontrols = page.getByText('Dynamic Controls');
        this.linkdynamicloading = page.getByText('Dynamic Loading');
        this.linkentryad = page.getByText('Entry Ad');
        this.linkexitintent = page.getByText('Exit Intent');
        this.linkfiledownload = page.getByText('File Download');
        this.linkfileupload = page.getByText('File Upload');
        this.linkfloatingmenu = page.getByText('Floating Menu');
        this.linkforgotpassword = page.getByText('Forgot Password');
        this.linkformauthentication = page.getByText('Form Authentication');
        this.linkframes = page.getByText('Frames');
        this.linkgeolocation = page.getByText('Geolocation');
        this.linkhorizontalslider = page.getByText('Horizontal Slider');
        this.linkhovers = page.getByText('Hovers');
        this.linkinfinitescroll = page.getByText('Infinite Scroll');
        this.linkinputs = page.getByText('Inputs');
        this.linkjqueryuimenus = page.getByText('JQuery UI Menus');
        this.linkjavascriptalerts = page.getByText('JavaScript Alerts');
        this.linkjavascriptonloadeventerror = page.getByText('JavaScript onload event error');
        this.linkkeypresses = page.getByText('Key Presses');
        this.linklargeNdeepdom = page.getByText('Large & Deep DOM');
        this.linkmultiplewindows = page.getByText('Multiple Windows');
        this.linknestedframes = page.getByText('Nested Frames');
        this.linknotificationmessages = page.getByText('Notification Messages');
        this.linkredirectlink = page.getByText('Redirect Link');
        this.linksecurefiledownload = page.getByText('Secure File Download');
        this.linkshadowdom = page.getByText('Shadow DOM');
        this.linkshiftingcontent = page.getByText('Shifting Content');
        this.linkslowresources = page.getByText('Slow Resources');
        this.linksortabledatatables = page.getByText('Sortable Data Tables');
        this.linkstatuscodes = page.getByText('Status Codes');
        this.linktypos = page.getByText('Typos');
        this.wysiwygeditor = page.getByText('WYSIWYG Editor');
    }

    async getPageHeading() {
        return await this.pageHeading.innerText();
    }

    async clickABTesting() {
        await this.linkabtesting.click();
    }
}

module.exports = HomePage;