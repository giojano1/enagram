export type ComparisonItem = {
  text: string;
  type: "added" | "deleted" | "unchanged";
};

export function compareTexts(
  oldText: string,
  newText: string
): ComparisonItem[] {
  const oldWords = oldText.split(/(\s+)/);
  const newWords = newText.split(/(\s+)/);

  const result: ComparisonItem[] = [];
  let oldIndex = 0;
  let newIndex = 0;

  while (oldIndex < oldWords.length || newIndex < newWords.length) {
    const oldWord = oldWords[oldIndex];
    const newWord = newWords[newIndex];

    if (oldIndex >= oldWords.length) {
      result.push({ text: newWord, type: "added" });
      newIndex++;
    } else if (newIndex >= newWords.length) {
      result.push({ text: oldWord, type: "deleted" });
      oldIndex++;
    } else if (oldWord === newWord) {
      result.push({ text: oldWord, type: "unchanged" });
      oldIndex++;
      newIndex++;
    } else {
      const oldWordInNewText = newWords.indexOf(oldWord, newIndex);
      const newWordInOldText = oldWords.indexOf(newWord, oldIndex);

      if (
        oldWordInNewText !== -1 &&
        (newWordInOldText === -1 || oldWordInNewText < newWordInOldText)
      ) {
        result.push({ text: newWord, type: "added" });
        newIndex++;
      } else if (newWordInOldText !== -1) {
        result.push({ text: oldWord, type: "deleted" });
        oldIndex++;
      } else {
        result.push({ text: oldWord, type: "deleted" });
        result.push({ text: newWord, type: "added" });
        oldIndex++;
        newIndex++;
      }
    }
  }

  return result;
}
