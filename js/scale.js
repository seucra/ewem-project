function fitGameToScreen() {
	const container = document.querySelector('.container');
	if (!container) return;
	const targetWidth = 1200;
	const targetHeight = 700;
	const scale = Math.min(
		(window.innerWidth * 0.96) / targetWidth,
		(window.innerHeight * 0.96) / targetHeight
	);
	container.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', fitGameToScreen);
window.addEventListener('orientationchange', fitGameToScreen);
window.addEventListener('DOMContentLoaded', fitGameToScreen);

if (document.readyState !== 'loading') {
	fitGameToScreen();
}
