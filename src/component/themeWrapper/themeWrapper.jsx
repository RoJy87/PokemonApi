import React from 'react'
import { ConfigProvider } from 'antd'

const ThemeWrapper = ({ theme, children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>
}

export default ThemeWrapper
