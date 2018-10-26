module.exports = { groupAdultsByAgeRange }

function groupAdultsByAgeRange(adults) {
  const ranges = {
    '20 and younger': { from:0, to: 20 },
    '21-30': { from: 21, to: 30 },
    '31-40': { from: 31, to: 40 },
    '41-50': { from: 41, to: 50 },
    '51 and older': { from: 51, to: Infinity}
  }

  // Check if an adult is in a certain age range (from ranges.keys)
  function isInAgeRange(adult, range) {
    return adult.age >= ranges[range].from && adult.age <= ranges[range].to
  }

  const result = {}
  Object.keys(ranges).map(range => {
    const filtered = adults.filter(adult => isInAgeRange(adult, range) && adult.age >= 18)
    if (filtered.length > 0) {
      result[range] = filtered
    }
  })
  return result
}