// ARRAY
let teamMembers = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela",
        surname: "Caroll",
        role:  "Chief & Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",

    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name:  "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];

// DOM ELEM
let membersDOM = document.querySelector(".all-members");

for (i = 0; i < teamMembers.length; i++) {
    const curTeamMember = teamMembers[i]
    console.log(curTeamMember);
    membersDOM.innerHTML += 
    `
    <div class="member">
        <div class="img"><img src="./img/${curTeamMember.image}"></div>
        <div class="info">
            <div class="full-name">${curTeamMember.name} ${curTeamMember.surname}</div>
            <div class="role">${curTeamMember.role}</div>
        </div>
    </div>
    `
}