module.exports = {
  rules: {
    'color-no-invalid-hex': true, // проверка невалидных цветов в HEX формате #XXXXXX
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }], // проверка ключевых слов в нижнем регистре (остальные - невалидные)
    'property-no-unknown': true, // проверка неизвестных CSS свойств
    'declaration-block-no-duplicate-properties': true, // проверка дубликатов CSS свойств
    'declaration-block-no-shorthand-property-overrides': true, // проверка сокращенных свойств, которые переопределяют значения для общих свойств
    'media-feature-name-no-unknown': true, // проверка неизвестных имен медиа-функций
    'comment-no-empty': true, // проверка пустых комментариев
    'no-descending-specificity': true, // проверка на наличие неверной последовательности селекторов по приоритету специфичности
    'no-duplicate-selectors': true, // проверка дублирования селекторов
    'no-invalid-position-at-import-rule': true, // проверка некорректной позиции @import (не вначале)
    'alpha-value-notation': 'number', // проверка на числовое значение в alpha-значениях (rgb(0 255 255 / 50%) => rgb(0 255 255 / 0.5))
    'color-function-notation': 'modern', // проверка на использование несовременных функций цветов (rgb(0, 255, 255))
    'color-hex-length': 'short', // проверка на использование цветов в HEX формате в сокращенном виде (#ffffff => #fff)
    'length-zero-no-unit': true, // проверка на единицы с 0 длинной (0px)
    // 'font-family-name-quotes': 'always-where-required', // проверять кавычки для тех шрифтов, которые не являются ключевыми словами, и нуждаются в пробелах, запятых и т.п.
    'function-url-quotes': 'never', // проверка на отсутствие кавычек при использовании функции url()
    'import-notation': 'url', // проверяет, чтобы @import правило всегда использовало функцию url()
    'shorthand-property-no-redundant-values': true, // Проверка избыточности значений в сокращенных свойствах (a { margin: 1px 1px; })
    'declaration-no-important': true, // проверять, чтобы не использовался !important
    'declaration-block-single-line-max-declarations': 1, // проверить, чтобы в однострочном блоке было всего одно свойство
    'no-unknown-animations': true, // запретить неизвестные анимации
    'selector-type-case': 'lower', // проверить, чтобы селекторы типа были в нижнем регистре
    'rule-empty-line-before': ['always', { ignore: ['first-nested'] }], // проверить, чтобы была пустая строка перед правилом CSS, за исключением первых свойств дочерних селекторов
    'at-rule-empty-line-before': 'always', // требовать или запретить пустую строку перед at-правилами.
    'selector-class-pattern': null, // убрали шаблон для селекторов класса
    'font-family-name-quotes': 'always-where-recommended', // проверяет кавычки для шрифтов, если они рекомендованы
  },
};
