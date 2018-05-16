import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import variables from 'styles/variables'

export default () => injectGlobal`
    ${styledNormalize}

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: ${variables.font};
        color: ${variables.primaryColor};
        overflow-y: scroll;
        background-color: ${variables.backgroundColor};
        font-weight: 400;
    }
`
