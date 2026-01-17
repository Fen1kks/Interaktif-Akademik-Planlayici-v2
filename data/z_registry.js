// Global Registry for Departments
// This allows individual data files to register themselves without ES modules (preventing CORS issues locally)
window.departments = window.departments || {};

// Helper to register a department
// Usage: registerDepartment("ME", { name: "Mechanical Engineering", curriculum: [...] })
window.registerDepartment = function(code, data) {
    window.departments[code] = data;
    console.log(`Registered department: ${data.name} (${code})`);
};
