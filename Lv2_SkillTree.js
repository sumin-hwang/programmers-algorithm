function solution(skill, skill_trees) {
    let cnt = 0;
    for (let list of skill_trees) {
      let s = list.split("").filter((v) => skill.indexOf(v) > -1).join("");
      if (skill.indexOf(s) === 0) cnt++;
    }
    return cnt;
  }