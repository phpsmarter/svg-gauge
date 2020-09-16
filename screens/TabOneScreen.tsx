import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import * as d3 from 'd3';
import { arc } from 'd3-shape';
import { Circle, Svg, Rect, Path } from 'react-native-svg';
import styled from 'styled-components';
import * as R from 'ramda';



const colorArr: string[] = ['#da2923', '#f8c300', '#65baa3', '#07f919', '#fbfbcc']
const arcParams: setArcType[] = [{ innerD: 0.65, outerD: 0.70, sA: -Math.PI / 4, eA: 1.6 * Math.PI, cR: 1 }, { innerD: 0.702, outerD: 0.75, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 }, { innerD: 0.752, outerD: 0.802, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 }, { innerD: 0.804, outerD: 0.852, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 }, { innerD: 0.854, outerD: 0.902, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 }]

export default function TabOneScreen() {
  const [PathArr, setPathArr] = React.useState<string[]>([])
  React.useEffect(() => {
    const res: string[] = []
    arcParams.map((arc, index) => {
      let r = getArc(arc)()
      res.push(r);
      setPathArr(res);
    })
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height="50%" width="50%" viewBox={[-1, -1, 2, 2].join(" ")}>

          {
            PathArr.map((path: string, index: number) => {
              return (
                <Path d={path} fill={colorArr[index]} key={index}></Path>
              )
            })
          }
        </Svg>

      </View>
    </View>
  );
}

type circleType = {
  cx: string;
  cy: string;
  r: string;
  stroke: string;
  strokeWidth: string;
  fill: string;

}

const CircleComponent = ({ cx = '0', cy = "0", r = "0.5", stroke = "red", strokeWidth = "0.2", fill = "transparent" }: circleType) => {
  return (
    <Circle
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
    />
  )
}

type setArcType = {
  innerD: number,
  outerD: number,
  sA: number;
  eA: number;
  cR: number;
}

const getArc = ({ innerD = 0.65, outerD = 0.70, sA = -Math.PI / 4, eA = 1.6 * Math.PI, cR = 1 }: setArcType): any => {

  return (d3.arc()
    .innerRadius(innerD)
    .outerRadius(outerD)
    .startAngle(sA)
    .endAngle(eA)
    .cornerRadius(cR)
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



