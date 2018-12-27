function setBlockContent() {
    //alert('at the top');
    var sdk = new window.sfdc.BlockSDK();
    sdk.setContent("");

    blockContent = document.getElementById('mainContentBlockDIV').innerHTML;

    sdk.setContent(blockContent);
}