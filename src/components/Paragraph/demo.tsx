import React from "react"
import { ScrollView, Text, View } from "react-native"
import { Paragraph } from "@src/components/Paragraph"

export const ParagraphDemo = () => {
  return (
    <ScrollView>
      <View style={{ marginBottom: 24, paddingVertical: 16, paddingLeft: 8, backgroundColor: '#ddd' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 31 }}>Paragraph Demo</Text>
      </View>
      
      <View style={{ marginVertical: 24, paddingVertical: 16, paddingLeft: 8, backgroundColor: '#ddd' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Small + color variations</Text>
      </View>

      <Paragraph size="sm" color="body">Size: sm, Color: body</Paragraph>
      <Paragraph size="sm" color="muted">Size: sm, Color: muted</Paragraph>
      <Paragraph size="sm" color="success">Size: sm, Color: success</Paragraph>
      <Paragraph size="sm" color="danger">Size: sm, Color: danger</Paragraph>
      <Paragraph size="sm" color="warning">Size: sm, Color: warning</Paragraph>
      <Paragraph size="sm" color="info">Size: sm, Color: info</Paragraph>

      <View style={{ marginVertical: 24, paddingVertical: 16, paddingLeft: 8, backgroundColor: '#ddd' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Medium + color variations</Text>
      </View>

      <Paragraph size="md" color="body">Size: md, Color: body</Paragraph>
      <Paragraph size="md" color="muted">Size: md, Color: muted</Paragraph>
      <Paragraph size="md" color="success">Size: md, Color: success</Paragraph>
      <Paragraph size="md" color="danger">Size: md, Color: danger</Paragraph>
      <Paragraph size="md" color="warning">Size: md, Color: warning</Paragraph>
      <Paragraph size="md" color="info">Size: md, Color: info</Paragraph>

      <View style={{ marginVertical: 24, paddingVertical: 16, paddingLeft: 8, backgroundColor: '#ddd' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Large + color variations</Text>
      </View>

      <Paragraph size="lg" color="body">Size: lg, Color: body</Paragraph>
      <Paragraph size="lg" color="muted">Size: lg, Color: muted</Paragraph>
      <Paragraph size="lg" color="success">Size: lg, Color: success</Paragraph>
      <Paragraph size="lg" color="danger">Size: lg, Color: danger</Paragraph>
      <Paragraph size="lg" color="warning">Size: lg, Color: warning</Paragraph>
      <Paragraph size="lg" color="info">Size: lg, Color: info</Paragraph>
    </ScrollView>
  )
}