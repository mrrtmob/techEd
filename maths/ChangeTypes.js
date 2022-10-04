// The text to identify rules for each possible step that can be taken

module.exports = {
  NO_CHANGE: 'ថេរុំ មិនផ្លាស់ប្តូរ',

  // ARITHMETIC

  // e.g. 2 + 2 -> 4 or 2 * 2 -> 4
  SIMPLIFY_ARITHMETIC: 'សម្រួល',

  // BASICS

  // e.g. 2/-1 -> -2
  DIVISION_BY_NEGATIVE_ONE: 'ចែកនឹង -1',
  // e.g. 2/1 -> 2
  DIVISION_BY_ONE: 'ការចែកនឹង1',
  // e.g. x * 0 -> 0
  MULTIPLY_BY_ZERO: 'គុណនឹង1',
  // e.g. x * 2 -> 2x
  REARRANGE_COEFF: 'រៀបមេគុណឡើងវិញ',
  // e.g. x ^ 0 -> 1
  REDUCE_EXPONENT_BY_ZERO: 'បន្ថយស្វ័យគុណដោយ 0',
  // e.g. 0/1 -> 0
  REDUCE_ZERO_NUMERATOR: 'លុបភាគយក 0',
  // e.g. 2 + 0 -> 2
  REMOVE_ADDING_ZERO: 'លុបបូក 0',
  // e.g. x ^ 1 -> x
  REMOVE_EXPONENT_BY_ONE: 'លុបស្វ័យគុណដោយ 0',
  // e.g. 1 ^ x -> 1
  REMOVE_EXPONENT_BASE_ONE: 'លុបស្វ័យគុណគោល 0',
  // e.g. x * -1 -> -x
  REMOVE_MULTIPLYING_BY_NEGATIVE_ONE: 'លុបការគុណនឹង -1',
  // e.g. x * 1 -> x
  REMOVE_MULTIPLYING_BY_ONE: 'លុបការគុណនឹង1',
  // e.g. 2 - - 3 -> 2 + 3
  RESOLVE_DOUBLE_MINUS: 'សម្រួលដកពីរដង',

  // COLLECT AND COMBINE AND BREAK UP

  // e.g. 2 + x + 3 + x -> 5 + 2x
  COLLECT_AND_COMBINE_LIKE_TERMS: 'ផ្តុំនិងបញ្ចូលតួដូចគ្នា',
  // e.g. x + 2 + x^2 + x + 4 -> x^2 + (x + x) + (4 + 2)
  COLLECT_LIKE_TERMS: 'ផ្តុំតួដូចគ្នា',

  // MULTIPLYING CONSTANT POWERS
  // e.g. 10^2 * 10^3 -> 10^(2+3)
  COLLECT_CONSTANT_EXPONENTS: 'ផ្តុំស្វ័យគុណថេរ',

  // ADDING POLYNOMIALS

  // e.g. 2x + x -> 2x + 1x
  ADD_COEFFICIENT_OF_ONE: 'បូកមេគុណ1',
  // e.g. x^2 + x^2 -> 2x^2
  ADD_POLYNOMIAL_TERMS: 'បូកតួពហុធា',
  // e.g. 2x^2 + 3x^2 + 5x^2 -> (2+3+5)x^2
  GROUP_COEFFICIENTS: 'ផ្តុំមេគុណ',
  // e.g. -x + 2x => -1*x + 2x
  UNARY_MINUS_TO_NEGATIVE_ONE: 'UNARY_MINUS_TO_NEGATIVE_ONE',

  // MULTIPLYING POLYNOMIALS

  // e.g. x^2 * x -> x^2 * x^1
  ADD_EXPONENT_OF_ONE: 'បូកស្វ័យគុណ',
  // e.g. x^2 * x^3 * x^1 -> x^(2 + 3 + 1)
  COLLECT_POLYNOMIAL_EXPONENTS: 'ផ្តុំស្វ័យគុណនៃពហុធា',
  // e.g. 2x * 3x -> (2 * 3)(x * x)
  MULTIPLY_COEFFICIENTS: 'គុណមេគុណ',
  // e.g. 2x * x -> 2x ^ 2
  MULTIPLY_POLYNOMIAL_TERMS: 'គុណពហុគុណ',

  // FRACTIONS

  // e.g. (x + 2)/2 -> x/2 + 2/2
  BREAK_UP_FRACTION: 'បំបែកប្រភាគ',
  // e.g. -2/-3 => 2/3
  CANCEL_MINUSES: 'សម្រួលសញ្ញាដក',
  // e.g. 2x/2 -> x
  CANCEL_TERMS: 'សម្រួលតួ',
  // e.g. 2/6 -> 1/3
  SIMPLIFY_FRACTION: 'សម្រួលប្រភាគ',
  // e.g. 2/-3 -> -2/3
  SIMPLIFY_SIGNS: 'សម្រួលសញ្ញា',
  // e.g. 15/6 -> (5*3)/(2*3)
  FIND_GCD: 'រកតួចែករួមធំបំផុត',
  // e.g. (5*3)/(2*3) -> 5/2
  CANCEL_GCD: 'សម្រួលតួចែករួមធំបំផុត',
  // e.g. 1 2/3 -> 5/3
  CONVERT_MIXED_NUMBER_TO_IMPROPER_FRACTION: 'ប្តូរចំនួនចម្រុះទៅជាប្រភាគ',
  // e.g. 1 2/3 -> ((1 * 3) + 2) / 3
  IMPROPER_FRACTION_NUMERATOR: 'ភាគយក',

  // ADDING FRACTIONS

  // e.g. 1/2 + 1/3 -> 5/6
  ADD_FRACTIONS: 'បូកប្រភាគ',
  // e.g. (1 + 2)/3 -> 3/3
  ADD_NUMERATORS: 'បូកភាគយក',
  // e.g. (2+1)/5
  COMBINE_NUMERATORS: 'ផ្តុំភាគយក',
  // e.g. 2/6 + 1/4 -> (2*2)/(6*2) + (1*3)/(4*3)
  COMMON_DENOMINATOR: 'ភាគបែងរួម',
  // e.g. 3 + 1/2 -> 6/2 + 1/2 (for addition)
  CONVERT_INTEGER_TO_FRACTION: 'ប្តូរចំនួនគត់ទៅជាប្រភាគ',
  // e.g. 1.2 + 1/2 -> 1.2 + 0.5
  DIVIDE_FRACTION_FOR_ADDITION: 'ចែកប្រភាគដើម្បីបូក',
  // e.g. (2*2)/(6*2) + (1*3)/(4*3) -> (2*2)/12 + (1*3)/12
  MULTIPLY_DENOMINATORS: 'គុណភាគយក',
  // e.g. (2*2)/12 + (1*3)/12 -> 4/12 + 3/12
  MULTIPLY_NUMERATORS: 'គុណភាគបែង',

  // MULTIPLYING FRACTIONS

  // e.g. 1/2 * 2/3 -> 2/6
  MULTIPLY_FRACTIONS: 'គុណប្រភាគ',

  // DIVISION

  // e.g. 2/3/4 -> 2/(3*4)
  SIMPLIFY_DIVISION: 'សម្រួលប្រភាគ',
  // e.g. x/(2/3) -> x * 3/2
  MULTIPLY_BY_INVERSE: 'គុណចម្រាស',

  // DISTRIBUTION

  // e.g. 2(x + y) -> 2x + 2y
  DISTRIBUTE: 'បែងចែក',
  // e.g. -(2 + x) -> -2 - x
  DISTRIBUTE_NEGATIVE_ONE: 'បែងចែក -1',
  // e.g. 2 * 4x + 2*5 --> 8x + 10 (as part of distribution)
  SIMPLIFY_TERMS: 'សម្រួលតួ',
  // e.g. (nthRoot(x, 2))^2 -> nthRoot(x, 2) * nthRoot(x, 2)
  // e.g. (2x + 3)^2 -> (2x + 3) (2x + 3)
  EXPAND_EXPONENT: 'ពន្លាតស្វ័យគុណ',

  // ABSOLUTE
  // e.g. |-3| -> 3
  ABSOLUTE_VALUE: 'តម្លៃដាច់ខាតួ',

  // ROOTS
  // e.g. nthRoot(x ^ 2, 4) -> nthRoot(x, 2)
  CANCEL_EXPONENT: 'សម្រួលស្វ័យគុណ',
  // e.g. nthRoot(x ^ 2, 2) -> x
  CANCEL_EXPONENT_AND_ROOT: 'សម្រួលស្វ័យគុណនិងឬស',
  // e.g. nthRoot(x ^ 4, 2) -> x ^ 2
  CANCEL_ROOT: 'សម្រួលឬស',
  // e.g. nthRoot(2, 2) * nthRoot(3, 2) -> nthRoot(2 * 3, 2)
  COMBINE_UNDER_ROOT: 'ផ្តុំតួក្នុងឬស',
  // e.g. 2 * 2 * 2 -> 2 ^ 3
  CONVERT_MULTIPLICATION_TO_EXPONENT: 'ប្តូរការគុណទៅជាស្វ័យគុណ',
  // e.g. nthRoot(2 * x) -> nthRoot(2) * nthRoot(x)
  DISTRIBUTE_NTH_ROOT: 'បំបែកឬសទី n',
  // e.g. nthRoot(4) * nthRoot(x^2) -> 2 * x
  EVALUATE_DISTRIBUTED_NTH_ROOT: 'សម្រួលឬសទី n',
  // e.g. 12 -> 2 * 2 * 3
  FACTOR_INTO_PRIMES: 'ដាក់ជាកត្តានៃចំនួនបឋមពីរ',
  // e.g. nthRoot(2 * 2 * 2, 2) -> nthRoot((2 * 2) * 2)
  GROUP_TERMS_BY_ROOT: 'ផ្តុំតួដោយឬស',
  // e.g. nthRoot(4) -> 2
  NTH_ROOT_VALUE: 'តម្លៃឬសទី n',
  // e.g. nthRoot(4) + nthRoot(4) = 2*nthRoot(4)
  ADD_NTH_ROOTS: 'បូកឬសទី n',
  // e.g. nthRoot(x, 2) * nthRoot(x, 2) -> nthRoot(x^2, 2)
  MULTIPLY_NTH_ROOTS: 'គុណឬសទី n',

  // SOLVING FOR A VARIABLE

  // e.g. x - 3 = 2 -> x - 3 + 3 = 2 + 3
  ADD_TO_BOTH_SIDES: 'បូកអង្គទាំងពីរ',
  // e.g. 2x = 1 -> (2x)/2 = 1/2
  DIVIDE_FROM_BOTH_SIDES: 'ចែកអង្គទាំងពីរ',
  // e.g. (2/3)x = 1 -> (2/3)x * (3/2) = 1 * (3/2)
  MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION: 'គុណអង្គទាំងពីរ',
  // e.g. -x = 2 -> -1 * -x = -1 * 2
  MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE: 'គុណអង្គទាំងពីរនឹង -1',
  // e.g. x/2 = 1 -> (x/2) * 2 = 1 * 2
  MULTIPLY_TO_BOTH_SIDES: 'គុណអង្គទាំងពីរ',
  // e.g. x + 2 - 1 = 3 -> x + 1 = 3
  SIMPLIFY_LEFT_SIDE: 'សម្រួលអង្គខាងឆ្វេង',
  // e.g. x = 3 - 1 -> x = 2
  SIMPLIFY_RIGHT_SIDE: 'សម្រួលអង្គខាងស្តាំ',
  // e.g. x + 3 = 2 -> x + 3 - 3 = 2 - 3
  SUBTRACT_FROM_BOTH_SIDES: 'ដកអង្គទាំងពីរ',
  // e.g. 2 = x -> x = 2
  SWAP_SIDES: 'ប្តូរអង្គ',
  // e.g. (x - 2) (x + 2) = 0 => x = [-2, 2]
  FIND_ROOTS: 'រកឬស',

  // CONSTANT EQUATION

  // e.g. 2 = 2
  STATEMENT_IS_TRUE: 'សំណើរត្រឹមត្រូវ',
  // e.g. 2 = 3
  STATEMENT_IS_FALSE: 'សំណើរខុស',

  // FACTORING

  // e.g. x^2 - 4x -> x(x - 4)
  FACTOR_SYMBOL: 'សញ្ញាកត្តា',
  // e.g. x^2 - 4 -> (x - 2)(x + 2)
  FACTOR_DIFFERENCE_OF_SQUARES: 'កត្តានៃផលដកការេ',
  // e.g. x^2 + 2x + 1 -> (x + 1)^2
  FACTOR_PERFECT_SQUARE: 'កត្តាការេ',
  // e.g. x^2 + 3x + 2 -> (x + 1)(x + 2)
  FACTOR_SUM_PRODUCT_RULE: 'កត្តាផលបូកនៃច្បាប់ផលគុណ',
  // e.g. 2x^2 + 4x + 2 -> 2x^2 + 2x + 2x + 2
  BREAK_UP_TERM: 'បំបែកតួ',
};
