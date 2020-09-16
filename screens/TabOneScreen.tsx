import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as d3 from 'd3';
import { arc } from 'd3-shape';
import { Circle, Svg, Rect, Path } from 'react-native-svg';
import styled from 'styled-components';
export default function TabOneScreen() {
  const [path1, setPath1] = React.useState<string | undefined>(undefined)
  const [path2, setPath2] = React.useState<string | undefined>(undefined)
  const [path3, setPath3] = React.useState<string | undefined>(undefined)
  const [path4, setPath4] = React.useState<string | undefined>(undefined)
  const path = false;

  const colorArr: string[] = ['#da2923', '#f8c300', '#65baa3', '#07f919', '#fbfbcc']

  React.useEffect(() => {

    // const backgroundArc = d3.arc()
    //   .innerRadius(0.65)
    //   .outerRadius(0.70)
    //   .startAngle(-Math.PI / 4)
    //   .endAngle(1.6 * Math.PI)
    //   .cornerRadius(1)()

    const backgroundArc1 = getArc({ innerD: 0.65, outerD: 0.70, sA: -Math.PI / 4, eA: 1.6 * Math.PI, cR: 1 });
    const backgroundArc2 = getArc({ innerD: 0.702, outerD: 0.75, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 });
    const backgroundArc3 = getArc({ innerD: 0.752, outerD: 0.802, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 });
    const backgroundArc4 = getArc({ innerD: 0.804, outerD: 0.852, sA: -Math.PI / 4, eA: 1.7 * Math.PI, cR: 1 });

    setPath1(backgroundArc1);
    setPath2(backgroundArc2);
    setPath3(backgroundArc3);
    setPath4(backgroundArc4);
  }, []);

  console.log(path1);

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

          {path ? (<Text>Loading...</Text>) : (<>
            <Path d={path1} fill={colorArr[0]}></Path>
            <Path d={path2} fill={colorArr[1]}></Path>
            <Path d={path3} fill={colorArr[2]}></Path>
            <Path d={path4} fill={colorArr[4]}></Path>
          </>)
          }

        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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



