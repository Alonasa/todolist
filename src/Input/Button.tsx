import React from 'react';

type propsType = {
  taskHandler: ()=> void
}

export const Button = (props: propsType) => {
  return (
	<div>
	  <button onClick={props.taskHandler}>+</button>
	</div>
  );
};

