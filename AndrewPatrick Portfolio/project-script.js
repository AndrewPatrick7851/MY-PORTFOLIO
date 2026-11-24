/* ================= PROJECT CARD INTERACTION ================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

```
card.addEventListener("pointermove", (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    card.style.setProperty("--x", `${percentX}%`);
    card.style.setProperty("--y", `${percentY}%`);

    /* Small 3D movement */

    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;

    card.style.transform =
        `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    card.classList.add("active");
});


card.addEventListener("pointerleave", () => {

    card.classList.remove("active");

    card.style.transform = "";

});


card.addEventListener("pointerdown", (event) => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty(
        "--x",
        `${(x / rect.width) * 100}%`
    );

    card.style.setProperty(
        "--y",
        `${(y / rect.height) * 100}%`
    );

    card.classList.add("active");
});


card.addEventListener("pointerup", () => {

    setTimeout(() => {

        card.classList.remove("active");
        card.style.transform = "";

    }, 350);

});


card.addEventListener("pointercancel", () => {

    card.classList.remove("active");
    card.style.transform = "";

});
```

});
