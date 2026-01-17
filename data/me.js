// REXX3: Programming / Computational
const rexxPool3 = [
    { id: "ES112", name: "Algo. & Prog.", credits: 4 },
    { id: "ES117", name: "Sci. Comp. w/ Octave", credits: 3 },
    { id: "ES118", name: "Sci. Comp. w/ Python", credits: 3 }
];

// REXX4: Electrical
const rexxPool4 = [
    { id: "ES222", name: "Fund. of EE", credits: 3 },
    { id: "EE211", name: "Circuit Theory", credits: 4 }
];

// REXX5: Econ / Management
const rexxPool5 = [
    { id: "ECON294", name: "Econ. for Eng.", credits: 3 },
    { id: "ES301", name: "Eng. Manage.", credits: 3 }
];

// REXX6, 7, 8, 9, 10: Technical Electives (Huge List)
const technicalElectives = [
    { id: "CSE464", name: "Intro. Data Sci.", credits: 3 },
    { id: "ES310", name: "Res. Orient. Inn.", credits: 3 },
    { id: "ES411", name: "Vehicle Electrif.", credits: 3 },
    { id: "ES415", name: "Smart Vehicles", credits: 3 },
    { id: "ME458", name: "New Tech. Auto.", credits: 3 },
    { id: "MTH424", name: "Gen. AI Models", credits: 3 },
    { id: "EE470", name: "DL for Comp. Vis.", credits: 3 },
    { id: "EE489", name: "Dig. Control Sys.", credits: 3 },
    { id: "MSN484", name: "Surface Sci. Eng.", credits: 3 },
    { id: "MTH423", name: "CV in Smart Veh.", credits: 3 },
    { id: "CSE462", name: "Intro. to AI", credits: 3 },
    { id: "EE468", name: "Dig. Signal Proc.", credits: 3 },
    { id: "EE479", name: "Elec. Machinery", credits: 3 },
    { id: "ISE437", name: "Project Mgmt.", credits: 3 },
    { id: "ISE464", name: "Comp. Aided Mfg.", credits: 3 },
    { id: "ME411", name: "Intro. Renew. Enr.", credits: 3 },
    { id: "ME422", name: "Int. Comb. Eng.", credits: 3 },
    { id: "ME423", name: "Fund. of HVAC", credits: 3 },
    { id: "ME424", name: "HVAC Design", credits: 3 },
    { id: "ME425", name: "Refrigeration Sys.", credits: 3 },
    { id: "ME426", name: "Heat Exchangers", credits: 3 },
    { id: "ME428", name: "Heat Engines", credits: 3 },
    { id: "ME431", name: "Intro. Turbomach.", credits: 3 },
    { id: "ME432", name: "Aerodynamics", credits: 3 },
    { id: "ME436", name: "Appl. Fluid Mech.", credits: 3 },
    { id: "ME438", name: "Eng. Acoustics", credits: 3 },
    { id: "ME439", name: "Gas Dynamics", credits: 3 },
    { id: "ME444", name: "Fatigue & Frac.", credits: 3 },
    { id: "ME446", name: "Mech. Composite", credits: 3 },
    { id: "ME449", name: "Appl. Solid Mech.", credits: 3 },
    { id: "ME451", name: "Num. Ctrl. Mech.", credits: 3 },
    { id: "ME452", name: "Mechanisms & App", credits: 3 },
    { id: "ME453", name: "Intro. Mob. Robot", credits: 3 },
    { id: "ME455", name: "Vehicle Dyn.", credits: 3 },
    { id: "ME456", name: "Mechatronics", credits: 3 },
    { id: "ME457", name: "Ctrl. Sys. Dsgn.", credits: 3 },
    { id: "ME459", name: "Robot Mechanics", credits: 3 },
    { id: "ME462", name: "Intro. to MEMS", credits: 3 },
    { id: "ME468", name: "Plast. & Forming", credits: 3 },
    { id: "ME469", name: "Nondestruc. Test", credits: 3 },
    { id: "ME477", name: "Finite Elem. Meth.", credits: 3 },
    { id: "ME478", name: "Optimization Tech.", credits: 3 },
    { id: "ME483", name: "Flight Mechanics", credits: 3 },
    { id: "ME484", name: "Automotive Eng.", credits: 3 },
    { id: "ME485", name: "Theory of Music", credits: 3 },
    { id: "ME490", name: "Special Topics", credits: 3 }
].sort((a, b) => a.id.localeCompare(b.id));

// Auto-sort other pools as well for consistency
rexxPool1.sort((a, b) => a.id.localeCompare(b.id));
rexxPool3.sort((a, b) => a.id.localeCompare(b.id));
rexxPool4.sort((a, b) => a.id.localeCompare(b.id));
rexxPool5.sort((a, b) => a.id.localeCompare(b.id));

window.registerDepartment("ME", {
    name: "Mechanical Engineering",
    curriculum: [
      // FRESHMAN - TERM 1
      { id: "ME101", name: "Intro. to ME", credits: 2, prereqs: [], term: 1 },
      { id: "TKL201", name: "Turkish I", credits: 2, prereqs: [], term: 1, options: turkishPool1 },
      { id: "PHYS101", name: "Physics I", credits: 4, prereqs: [], term: 1 },
      { id: "MATH131", name: "Calculus I", credits: 4, prereqs: [], term: 1 },
      { id: "CHEM101", name: "Chemistry", credits: 4, prereqs: [], term: 1 },
      { id: "REXX1", name: "Restricted Elective", credits: 3, prereqs: [], term: 1, options: rexxPool1 },
    
      // FRESHMAN - TERM 2
      { id: "ME182", name: "Solid Modeling", credits: 3, prereqs: [], term: 2 },
      { id: "TKL202", name: "Turkish II", credits: 2, prereqs: [], term: 2, options: turkishPool2 },
      { id: "PHYS102", name: "Physics II", credits: 4, prereqs: ["PHYS101"], term: 2 },
      { id: "MATH132", name: "Calculus II", credits: 4, prereqs: ["MATH131"], term: 2 },
      { id: "HUM103", name: "Humanities", credits: 2, prereqs: [], term: 2 },
      { id: "REXX2", name: "Restricted Elective", credits: 3, prereqs: [], term: 2, options: rexxPool1 },
    
      // SOPHOMORE - TERM 3
      { id: "MATH221", name: "Linear Algebra", credits: 3, prereqs: [], term: 3 },
      { id: "ME241", name: "Statics", credits: 3, prereqs: ["PHYS101"], term: 3 },
      { id: "FEXX1", name: "Free Elective", credits: 3, prereqs: [], term: 3 },
      { id: "MATH241", name: "Diff. Equations", credits: 4, prereqs: ["MATH132"], term: 3 },
      { id: "ME211", name: "Thermo I", credits: 3, prereqs: ["MATH131", "PHYS101"], term: 3 },
      { id: "REXX3", name: "Restricted Elective", credits: 3, prereqs: [], term: 3, options: rexxPool3 },
    
      // SOPHOMORE - TERM 4
      { id: "REXX4", name: "Restricted Elective", credits: 3, prereqs: [], term: 4, options: rexxPool4 },
      { id: "ME246", name: "Strength of Materials", credits: 3, prereqs: ["ME241"], term: 4, coreqs: ["ME266"] },
      { id: "ME266", name: "Solid Lab.", credits: 2, prereqs: ["ME241"], term: 4, coreqs: ["ME246"] },
      { id: "ME244", name: "Dynamics", credits: 3, prereqs: ["ME241"], term: 4 },
      { id: "ME212", name: "Thermo II", credits: 3, prereqs: ["ME211"], term: 4 },
      { id: "ME264", name: "Materials Science", credits: 3, prereqs: ["CHEM101"], term: 4 },
    
      // JUNIOR - TERM 5
      { id: "ME371", name: "Num. Methods", credits: 3, prereqs: ["MATH221","REXX3"], term: 5 },
      { id: "ME343", name: "Machine Elm. I", credits: 3, prereqs: ["ME246"], term: 5 },
      { id: "REXX5", name: "Restricted Elective", credits: 3, prereqs: [], term: 5, options: rexxPool5 },
      { id: "ME331", name: "Fluid Mechanics", credits: 3, prereqs: ["ME211", "MATH241"], term: 5, coreqs: ["ME333"] },
      { id: "ME333", name: "Fluid Lab.", credits: 2, prereqs: ["ME211"], term: 5, coreqs: ["ME331"] },
      { id: "ME363", name: "Manufacturing", credits: 3, prereqs: ["ME264"], term: 5 },
    
      // JUNIOR - TERM 6
      { id: "REXX6", name: "Restricted Elective", credits: 3, prereqs: [], term: 6, options: technicalElectives },
      { id: "ME344", name: "Machine Elm. II", credits: 3, prereqs: ["ME246"], term: 6 },
      { id: "ME352", name: "System Dynamics", credits: 4, prereqs: ["ME244", "MATH241"], term: 6 },
      { id: "ME324", name: "Heat Transfer", credits: 4, prereqs: ["ME333"], term: 6 },
      { id: "FEXX2", name: "Free Elective", credits: 3, prereqs: [], term: 6 },
      { id: "ME400", name: "Summer Practice", credits: 0, prereqs: ["ME363", { "type": "count_pattern", "pattern": "^ME3", "exclude": ["ME363"], "minCount": 5, "message": "ME3XX" }], term: 6 },
    
      // SENIOR - TERM 7
      { id: "REXX7", name: "Restricted Elective", credits: 3, prereqs: [], term: 7, options: technicalElectives },
      { id: "REXX8", name: "Restricted Elective", credits: 3, prereqs: [], term: 7, options: technicalElectives },
      { id: "ME403", name: "Inst. & Exp.", credits: 3, prereqs: ["ME266", "ME333"], term: 7 },
      { id: "ME427", name: "Ther. Sys. Design", credits: 3, prereqs: ["ME333"], term: 7 },
      { id: "ME445", name: "Mech. Vibrations", credits: 3, prereqs: ["MATH241", "ME244"], term: 7 },
      { id: "HTR301", name: "History of TR I", credits: 2, prereqs: [], term: 7 },
    
      // SENIOR - TERM 8
      { id: "REXX9", name: "Restricted Elective", credits: 3, prereqs: [], term: 8, options: technicalElectives },
      { id: "REXX10", name: "Restricted Elective", credits: 3, prereqs: [], term: 8, options: technicalElectives },
      { id: "ME482", name: "ME Design", credits: 3, prereqs: [], term: 8 },
      { id: "ME492", name: "Graduation Project", credits: 4, prereqs: [], term: 8 },
      { id: "FEXX3", name: "Free Elective", credits: 3, prereqs: [], term: 8 },
      { id: "HTR302", name: "History of TR II", credits: 2, prereqs: [], term: 8 },

      // EXTRA COURSES - TERM 9
      { id: "EXTRA-1", name: "Extra Course 1", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-2", name: "Extra Course 2", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-3", name: "Extra Course 3", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-4", name: "Extra Course 4", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-5", name: "Extra Course 5", credits: [3, 4, 2], prereqs: [], term: 9 },
      { id: "EXTRA-6", name: "Extra Course 6", credits: [3, 4, 2], prereqs: [], term: 9 }
    ]
});
