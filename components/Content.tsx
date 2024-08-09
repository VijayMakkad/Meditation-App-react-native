import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = ({children}:any) => {
  return (
    <SafeAreaView className='flex-1 px-4 py-2'>
        {children}
    </SafeAreaView>
  )
}

export default Content