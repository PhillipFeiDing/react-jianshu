import { createGlobalStyle } from 'styled-components'

export const GlobalIconfontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1588568706567'); /* IE9 */
    src: url('./iconfont.eot?t=1588568706567#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1588568706567') format('woff'),
    url('./iconfont.ttf?t=1588568706567') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1588568706567#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`