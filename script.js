document.querySelectorAll(".boton").forEach((boton) => {
	boton.addEventListener("mousemove", (e) => {
		const rect = boton.getBoundingClientRect();
		const x = e.clientX - rect.left; // posición X del mouse dentro del elemento
		const y = e.clientY - rect.top; // posición Y del mouse dentro del elemento

		const midX = rect.width / 2;
		const midY = rect.height / 2;

		const maxTilt = 30; // Grados máximos de inclinación
		const tiltX = ((y - midY) / midY) * maxTilt;
		const tiltY = ((x - midX) / midX) * -maxTilt;

		boton.style.transform = `scale(2) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
	});

	boton.addEventListener("mouseleave", () => {
		boton.style.transform = "scale(1)"; // Resetear la transformación al salir
	});
});
