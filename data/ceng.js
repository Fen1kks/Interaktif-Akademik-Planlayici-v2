window.registerDepartment("CENG", {
    name: "Computer Engineering",
    curriculum: [
      // FRESHMAN - TERM 1
      { id: "CENG101", name: "Intro. to CENG", credits: 3, prereqs: [], term: 1 },
      { id: "MATH131", name: "Calculus I", credits: 4, prereqs: [], term: 1 },
      { id: "PHYS101", name: "Physics I", credits: 4, prereqs: [], term: 1 },
      { id: "TKL201", name: "Turkish I", credits: 2, prereqs: [], term: 1 },
      
      // FRESHMAN - TERM 2
      { id: "CENG102", name: "Programming I", credits: 4, prereqs: ["CENG101"], term: 2 },
      { id: "MATH132", name: "Calculus II", credits: 4, prereqs: ["MATH131"], term: 2 },
      { id: "PHYS102", name: "Physics II", credits: 4, prereqs: ["PHYS101"], term: 2 },
      
      // SOPHOMORE - TERM 3
      { id: "CENG201", name: "Data Structures", credits: 4, prereqs: ["CENG102"], term: 3 },
      { id: "MATH221", name: "Linear Algebra", credits: 3, prereqs: [], term: 3 },
      
      // SAMPLE HIGHER YEARS
      { id: "CENG301", name: "Algorithms", credits: 3, prereqs: ["CENG201"], term: 5 },
      { id: "CENG401", name: "Senior Project", credits: 4, prereqs: ["CENG301"], term: 7 }
    ]
});
