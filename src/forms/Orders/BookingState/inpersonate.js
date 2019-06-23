function impersonate(traveller) {
  const age = traveller.age || 0;

  if (age > 0 && age <= 18) {
    return { age_group: 'child', age: age };
  } else {
    return { age_group: 'adult', age: age };
  }
}

export default impersonate;
