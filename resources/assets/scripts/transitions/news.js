import showSectionTitles from '../modules/showSectionTitle';

export default function() {
  const sectionTitles = document.querySelectorAll('.sectionTitle-container');
  showSectionTitles(sectionTitles[0]);
}