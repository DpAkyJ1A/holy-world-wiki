import { useMemo } from "react"

export const useSearch = (searchQuery, sectionData) => {
  return useMemo(() => search(searchQuery, sectionData), [searchQuery, sectionData]);
}

const search = (searchQuery, sectionData) => {
  if (searchQuery.length < 3) return [];

  const links = [];
  const baseAddress = sectionData.baseAddress;

  sectionData.sections.forEach((section) => {
    const sectionAddress = section.sectionAddress;
    section.subsections.forEach((subSection) => {
      const subSectionAddress = subSection.sectionAddress;
      subSection.articles.forEach((article) => {
        const articleAddress = article.articleAddress;
        const name = article.articleName;
        const fullAddress =
          baseAddress + sectionAddress + subSectionAddress + articleAddress;
        
        const matches = searchForMatchesInAnArticle(searchQuery, article);
        
        if (matches) {
          const obj = {
            address: fullAddress,
            name: name,
            matches: matches,
          };

          links.push(obj);
        }
      });
    })
  });

  const sortedLinks = links.sort((a, b) => {
    if (a.matches < b.matches) {
      return 1;
    } else if (a.matches > b.matches) {
      return -1;
    }
    return 0;
  })

  return sortedLinks;
};

const searchForMatchesInAnArticle = (searchQuery, article) => {
  let counterOfMatches = 0;

  counterOfMatches += countSubstringOccurrences(
    article.articleName,
    searchQuery
  );

  article.articleContent.forEach((el) => {
    if (el.additionImg) {
      counterOfMatches += countSubstringOccurrences(el.value, searchQuery);
      counterOfMatches += countSubstringOccurrences(
        el.additionImg.alt,
        searchQuery
      );
    } else if (el.value) {
      counterOfMatches += countSubstringOccurrences(el.value, searchQuery);
    } else if (el.alt) {
      counterOfMatches += countSubstringOccurrences(el.alt, searchQuery);
    } else if (el.li) {
      el.li.forEach((l) => {
        counterOfMatches += countSubstringOccurrences(l, searchQuery);
      });
    }
  });

  return counterOfMatches;
}

function countSubstringOccurrences(string, substring) {
  const regex = new RegExp(substring.toLowerCase(), 'g');
  const matches = string.toLowerCase().match(regex);

  return matches ? matches.length : 0;
}