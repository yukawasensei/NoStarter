export function initCursorEffect() {
  const cursorFollower = document.querySelector('.cursor-follower');

  if (cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      cursorFollower.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });
  }
}
