// ==========================================================================
// CORE PIPELINE INTERACTION LOGIC MATRIX
// ==========================================================================

// 1. Preloader Screen Removal Lifecycle
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('portalLoader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transform = 'translateY(-100vh)';
            setTimeout(() => loader.remove(), 600);
        }
    }, 1800);
});

// 2. Mobile Flyout Responsive Drawer Navigation Controls
const mobileDrawer = document.getElementById('mobileDrawer');
const openTrigger = document.getElementById('menuOpenTrigger');
const closeTrigger = document.getElementById('menuCloseTrigger');
const drawerLinks = document.querySelectorAll('.drawer-link');

function toggleDrawer(open) {
    if (open) {
        mobileDrawer.classList.add('active');
    } else {
        mobileDrawer.classList.remove('active');
    }
}

openTrigger.addEventListener('click', () => toggleDrawer(true));
closeTrigger.addEventListener('click', () => toggleDrawer(false));
drawerLinks.forEach(link => link.addEventListener('click', () => toggleDrawer(false)));

// 3. Dynamic Registration Node Pop-out Actions Pipeline
const gatewayTriggerArea = document.getElementById('gatewayTriggerArea');
const registrationNode = document.getElementById('registrationNode');
const securePassTrigger = document.getElementById('securePassTrigger');
const closeFormTrigger = document.getElementById('closeFormTrigger');
const navRegBtn = document.getElementById('navRegBtn');
const drawerRegBtn = document.getElementById('drawerRegBtn');

function revealRegistrationCard() {
    gatewayTriggerArea.classList.add('hidden');
    registrationNode.classList.add('revealed');
    registrationNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideRegistrationCard() {
    registrationNode.classList.remove('revealed');
    gatewayTriggerArea.classList.remove('hidden');
}

securePassTrigger.addEventListener('click', revealRegistrationCard);
navRegBtn.addEventListener('click', revealRegistrationCard);
drawerRegBtn.addEventListener('click', revealRegistrationCard);
closeFormTrigger.addEventListener('click', hideRegistrationCard);

// 4. Registration Selection Toggle Controls
let ieeeStatus = true;
const tglYes = document.getElementById('tglYes');
const tglNo = document.getElementById('tglNo');

function setIeeeState(state) {
    ieeeStatus = state;
    if (state) {
        tglYes.classList.add('active');
        tglNo.classList.remove('active');
    } else {
        tglYes.classList.remove('active');
        tglNo.classList.add('active');
    }
}

tglYes.addEventListener('click', () => setIeeeState(true));
tglNo.addEventListener('click', () => setIeeeState(false));

// DATA CAPTURE SUBMISSION LAYER
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('regName').value.trim();
    const userEmail = document.getElementById('regEmail').value.trim();
    
    alert(`Success!\nName: ${userName}\nEmail: ${userEmail}\nIEEE Status: ${ieeeStatus ? 'Member' : 'Non-Member'}\nData processed to security pipeline.`);
    
    document.getElementById('registrationForm').reset();
    setIeeeState(true);
    hideRegistrationCard();
});

// 5. Secondary Action Components Controls
document.getElementById('ctaHostBtn').addEventListener('click', () => {
    alert('Host Application Matrix Initialized.');
});

// 6. Live Automated Robo Chat Terminal Assistant Controls (SAFE RETRACT FIX)
const chatPanel = document.getElementById('chatPanel');
const chatOpenTrigger = document.getElementById('chatOpenTrigger');
const chatCloseTrigger = document.getElementById('chatCloseTrigger');
const chatGlobalExit = document.getElementById('chatGlobalExit');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatContainer = document.getElementById('chatContainer');

function toggleChat(open) {
    if (open) {
        chatPanel.classList.add('active');
    } else {
        chatPanel.classList.remove('active');
    }
}

chatOpenTrigger.addEventListener('click', () => toggleChat(true));
chatCloseTrigger.addEventListener('click', () => toggleChat(false));

// Safe minimize handler (Prevents whole widget destruction bug)
chatGlobalExit.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleChat(false);
});

function sendChatMessage() {
    const queryText = chatInput.value.trim();
    if (!queryText) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = queryText;
    chatContainer.appendChild(userMsg);

    const query = queryText.toLowerCase();
    chatInput.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        
        if (query.includes('register') || query.includes('join')) {
            botMsg.textContent = "Click the 'SECURE AN ENTRY PASS' button on the main layout panel to pop out our input node matrix.";
        } else if (query.includes('track') || query.includes('event') || query.includes('workshop')) {
            botMsg.textContent = "AKRASC 6.0 maps 40+ Technical Workshops including ROS configuration, Computer Vision frameworks, and research tracks.";
        } else if (query.includes('ras') || query.includes('ieee') || query.includes('chapter')) {
            botMsg.textContent = "The IEEE RAS Kerala Chapter includes 1000+ members and 35+ Student Branches leading local technical automation projects.";
        } else {
            botMsg.textContent = "Systems are nominal. Feel free to explore our timeline or about section for info on the upcoming 6th edition conclave!";
        }
        
        chatContainer.appendChild(botMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
}

chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
});