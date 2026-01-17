// Shared Course Pools

// Turkish Language Pools
window.turkishPool1 = [
    { id: "TKL201", name: "Turkish I", credits: 2 },
    { id: "AFYA101", name: "Trk. for Foreigners I", credits: 3 }
];
window.turkishPool2 = [
    { id: "TKL202", name: "Turkish II", credits: 2 },
    { id: "AFYA102", name: "Trk. for Foreigners II", credits: 3 }
];

// Sort Turkish pools
window.turkishPool1.sort((a, b) => a.id.localeCompare(b.id));
window.turkishPool2.sort((a, b) => a.id.localeCompare(b.id));

// Academic English Pool (REXX1/REXX2)
window.rexxPool1 = [
    { id: "AFE131", name: "Academic English I", credits: 3 },
    { id: "AFE132", name: "Academic English II", credits: 3 },
    { id: "AFEA111", name: "English Speaking I", credits: 3 },
    { id: "AFEA112", name: "English Speaking II", credits: 3 },
    { id: "ES176", name: "Research & Tech. Writing", credits: 3 }
].sort((a, b) => a.id.localeCompare(b.id));
