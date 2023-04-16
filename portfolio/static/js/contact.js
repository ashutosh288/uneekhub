const form = document.getElementById('contact-form');

if (form) {
  const bodyInput = form.querySelector('textarea');
  const anchor = form.querySelector('a');

  function updateLink() {
    const value = bodyInput?.value?.trim();

    function detectMob() {
      const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];
      
      return toMatch.some(toMatchItem => navigator.userAgent.match(toMatchItem));
  }

    const link = detectMob() ? `mailto:harshitsinha03418@gmail.com?body=${value}&subject=Uneekhub_request` : `https://mail.google.com/mail/?view=cm&fs=1&to=harshitsinha03418@gmail.com&su=Uneekhub_request&body=${value}`;
    anchor.href = link;
  }

  anchor.addEventListener('click', updateLink);
}
