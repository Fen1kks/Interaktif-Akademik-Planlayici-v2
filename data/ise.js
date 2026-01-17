window.registerDepartment("ISE", {
    name: "Industrial Engineering",
    curriculum: [
      // FRESHMAN - TERM 1
      { id: "CHEM101", name: "Chemistry", credits: 4, prereqs: [], term: 1 },
      { id: "MATH131", name: "Calculus I", credits: 4, prereqs: [], term: 1 },
      { id: "PHYS101", name: "Physics I", credits: 4, prereqs: [], term: 1 },
      { id: "HUM103", name: "Humanities", credits: 2, prereqs: [], term: 1 },
      { id: "REXX1", name: "Restricted Elective", credits: 3, prereqs: [], term: 1 },
      { id: "REXX2", name: "Restricted Elective", credits: 2, prereqs: [], term: 1 },

      // FRESHMAN - TERM 2
      { id: "ISE101", name: "Intro. to ISE", credits: 3, prereqs: [], term: 2 },
      { id: "MATH132", name: "Calculus II", credits: 4, prereqs: ["MATH131"], term: 2 },
      { id: "PHYS102", name: "Physics II", credits: 4, prereqs: ["PHYS101"], term: 2 },
      { id: "FEXX1", name: "Free Elective", credits: 3, prereqs: [], term: 2 },
      { id: "FEXX2", name: "Free Elective", credits: 3, prereqs: [], term: 2 },

      // SOPHOMORE - TERM 3
      { id: "ES112", name: "Algorithms & Prog.", credits: 4, prereqs: [], term: 3 },
      { id: "MATH241", name: "Diff. Equations", credits: 4, prereqs: ["MATH132"], term: 3 },
      { id: "MATH221", name: "Linear Algebra", credits: 3, prereqs: [], term: 3 },
      { id: "MATH281", name: "Probability", credits: 3, prereqs: ["MATH132"], term: 3 },
      { id: "ECON294", name: "Engineering Economy", credits: 3, prereqs: [], term: 3 },
      { id: "TKL201", name: "Turkish I", credits: 2, prereqs: [], term: 3 },

      // SOPHOMORE - TERM 4
      { id: "ISE214", name: "Comp. Methods", credits: 4, prereqs: ["ES112"], term: 4 },
      { id: "ISE222", name: "Operations Research I", credits: 4, prereqs: ["MATH221"], term: 4 },
      { id: "ISE256", name: "Statistics for ISE", credits: 4, prereqs: ["MATH281"], term: 4 },
      { id: "TKL202", name: "Turkish II", credits: 2, prereqs: [], term: 4 },
      { id: "REXX3", name: "Restricted Elective", credits: 3, prereqs: [], term: 4 },

      // JUNIOR - TERM 5
      { id: "ISE311", name: "Info. Technologies", credits: 4, prereqs: ["ECON294"], term: 5 },
      { id: "ISE323", name: "Operations Research II", credits: 4, prereqs: ["MATH281"], term: 5 },
      { id: "ISE331", name: "Finance for Engineers", credits: 3, prereqs: ["ES112"], term: 5 },
      { id: "ISE361", name: "Prod. Sys. Design", credits: 3, prereqs: [], term: 5 },
      { id: "HTR301", name: "History of TR I", credits: 2, prereqs: [], term: 5 },
      { id: "REXX4", name: "Restricted Elective", credits: 3, prereqs: [], term: 5 },

      // JUNIOR - TERM 6
      { id: "REXX5", name: "Restricted Elective", credits: 3, prereqs: ["ISE101"], term: 6 },
      { id: "ISE316", name: "Comp. App. for ISE", credits: 3, prereqs: ["ISE214", "ISE222"], term: 6 },
      { id: "ISE344", name: "Simulation", credits: 3, prereqs: ["ISE323", "ISE256"], term: 6 },
      { id: "REXX6", name: "Restricted Elective", credits: 3, prereqs: [], term: 6 },
      { id: "ISE362", name: "Supply Chain Mgmt.", credits: 4, prereqs: ["ISE361"], term: 6 },
      { id: "HTR302", name: "History of TR II", credits: 2, prereqs: [], term: 6 },

      // SENIOR - TERM 7
      { id: "ISE401", name: "System Dynamics", credits: 4, prereqs: ["REXX5", "MATH241"], term: 7 },
      { id: "ISE412", name: "Data Science", credits: 3, prereqs: ["ISE2140", "ISE256"], term: 7 },
      { id: "ISE451", name: "Stat. Quality Control", credits: 3, prereqs: ["ISE256"], term: 7 },
      { id: "ISE400", name: "Summer Practice", credits: 0, prereqs: ["100 Credits"], term: 7 },
      { id: "ISE491", name: "Intro. to Eng. Project", credits: 0, prereqs: ["ISE361", "ISE214", "ISE222"], term: 7 },
      { id: "REXX7", name: "Restricted Elective", credits: 3, prereqs: [], term: 7 },
      { id: "FEXX3", name: "Free Elective", credits: 3, prereqs: [], term: 7 },

      // SENIOR - TERM 8
      { id: "ISE402", name: "System Design", credits: 3, prereqs: ["REXX5"], term: 8 },
      { id: "ISE432", name: "Decision Analysis", credits: 3, prereqs: ["ISE323", "ISE256"], term: 8 },
      { id: "REXX8", name: "Restricted Elective", credits: 3, prereqs: [], term: 8 },
      { id: "REXX9", name: "Restricted Elective", credits: 3, prereqs: [], term: 8 },
      { id: "ISE492", name: "Graduation Project", credits: 3, prereqs: ["ISE491"], term: 8 },

      // EXTRA COURSES - TERM 9
      { id: "EXTRA-1", name: "Extra Course 1", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-2", name: "Extra Course 2", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-3", name: "Extra Course 3", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-4", name: "Extra Course 4", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-5", name: "Extra Course 5", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-6", name: "Extra Course 6", credits: [3, 4, 2], prereqs: [], term: 9 }
    ]
});
