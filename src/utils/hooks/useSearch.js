import { useMemo } from "react"
import { useSelector } from 'react-redux';

export const useSearch = (searchQuery, sectionData) => {
  const language = useSelector((state) => state.lang);
  return useMemo(
    () => search(searchQuery, sectionData, language),
    [searchQuery, sectionData]
  );
}

const search = (searchQuery, sectionData, language) => {
  if (searchQuery.length < 3) return [];

  const links = [];
  const baseAddress = sectionData.baseAddress;

  sectionData.sections.forEach((section) => {
    const sectionAddress = section.sectionAddress;
    section.subsections.forEach((subSection) => {
      const subSectionAddress = subSection.sectionAddress;
      subSection.articles.forEach((article) => {
        const articleAddress = article.articleAddress;
        const name = article.articleName[language] || article.articleName;
        const fullAddress =
          baseAddress + sectionAddress + subSectionAddress + articleAddress;

        const matches = searchForMatchesInAnArticle(
          searchQuery,
          article,
          language
        );

        if (matches) {
          const obj = {
            address: fullAddress,
            name: name,
            matches: matches,
          };

          links.push(obj);
        }
      });
    });
  });

  const sortedLinks = links.sort((a, b) => {
    if (a.matches < b.matches) {
      return 1;
    } else if (a.matches > b.matches) {
      return -1;
    }
    return 0;
  });

  return sortedLinks;
};

const searchForMatchesInAnArticle = (searchQuery, article, language) => {
  let counterOfMatches = 0;

  counterOfMatches += countSubstringOccurrences(
    article.articleName[language],
    searchQuery
  );

  article.articleContent.forEach((el) => {
    if (el.additionImg) {
      counterOfMatches += countSubstringOccurrences(
        el.value[language],
        searchQuery
      );
      counterOfMatches += countSubstringOccurrences(
        el.additionImg.alt[language],
        searchQuery
      );
    } else if (el.value) {
      counterOfMatches += countSubstringOccurrences(
        el.value[language],
        searchQuery
      );
    } else if (el.alt) {
      counterOfMatches += countSubstringOccurrences(
        el.alt[language],
        searchQuery
      );
    } else if (el.li) {
      el.li[language].forEach((l) => {
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