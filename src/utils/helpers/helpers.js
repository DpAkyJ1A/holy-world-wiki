export const getAllAddresses = (obj) => {
  const root = obj.baseAddress;
  const addressesArray = [root];

  const sections = obj.sections;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionAddress = section.sectionAddress;
    const subsections = section.subsections;
    for (let j = 0; j < subsections.length; j++) {
      const subSection = subsections[j];
      const subSectionAddress = subSection.sectionAddress;
      const articles = subSection.articles;
      for (let t = 0; t < articles.length; t++) {
        const article = articles[t];
        const articleAddress = article.articleAddress;

        const uniqueAddress = `${root}${sectionAddress}${subSectionAddress}${articleAddress}`;
        addressesArray.push(uniqueAddress);
      }
    }
  }

  return addressesArray;
}

export const scrollToTop = () => {
  window.location.href = '#nav';
};