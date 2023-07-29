// Function to toggle the module descriptions
function toggleModule(moduleId) {
  const moduleDescription = document.getElementById(moduleId);
  const activeModule = document.querySelector('.module-card.active');

  if (activeModule) {
    const activeModuleDescription = activeModule.querySelector('.module-description');
    activeModule.classList.remove('active');
    activeModuleDescription.style.maxHeight = '0';
  }

  if (activeModule !== moduleDescription.parentNode) {
    moduleDescription.parentNode.classList.add('active');
    moduleDescription.style.maxHeight = '1000px';
  }
}
