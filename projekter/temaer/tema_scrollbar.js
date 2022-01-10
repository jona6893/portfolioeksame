//* Finder ud af hvor langt der er til bunden af siden.

// sættes i gang når siden loades.
window.addEventListener("scroll", () => indicateScrollBar());

function indicateScrollBar() {
  /* winScroll enten "document.body.scrollTop" eller "document.documentElement.scrollTop" til at
  finde ud af hvor langt væk vi er fra toppen af siden. Altså hvis vi scroller halvejs ned på siden
  vil vi altså får et tal i pixel på hvor langt der er til toppen af siden.
  Grunden til at der er 2 document. er fordi de forskellige browers understøtter forskellige koder.
  den en virker på firefox men måske ikke på chrome hvor den anden virker.  */
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  /* For at kunne finde ud af hvor meget af siden vi har set, skal vi først vide hvor meget af skræmen vi kan se
    altså vores "viewport" og hvor lang siden er. scrollHeight finder højten af siden, clientHeight finder ud af hvor meget vores viewport/skræm kan se.
    Når vi kender de 2 tal kan vi minuse dem med hinnanden for at finde den del af siden i ikke kan se.

    altså er siden 1000px høj og vores skræm er 500px høj, kan vi sige 1000 - 500 = 500 Så vi kan ikke se 500px af siden.
    */
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  /* Nu har vi 2 tal der fortæller os hvor højt html siden er og hvor meget af siden vi ikke kan se. Ttlså winScroll = højten af siden
  og height = hvor meget vi ikke kan se.  Nu skal vi have fundet procenten for hvor langt ende på siden vi er.
  Dette kan vi gøre ved at divider winScroll med height og så gange det med 100
  */
  const scrolled = (winScroll / height) * 100;

  /*   document.documentElement.style.setProperty("--scroll", `${scrolled}%`);  --> ${} lader os placer en variable inden i en string ""  */

  /* Nu har vi vores procent tal, så nu skal vi give tallet til vores CSS variable --scroll. style.setProperty lader of redigere i vores CSS
  fra vores Javascript dokument.  først fortæller vi den hvilket element vi ønsker at give en værdi, derefter værdien.
  I dette tilfælde vælger vi --scroll som vores element, derefter vælger vi vores procent tal ved at bruge .toString() og tilføjer "%" for at
  give vores procent tal et procent tegn i css.
*/
  document.documentElement.style.setProperty(
    "--scroll",
    scrolled.toString() + "%"
  );

  console.log(winScroll);
  console.log(height);
  console.log(scrolled);
}



