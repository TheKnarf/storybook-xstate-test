import React from 'react';
import { Bear } from '../icon';
import taskMachine from './task.state';
import { useMachine } from "@xstate/react";
import css from './task.module.css';

interface Person {
	name: string;
	profileImage?: string;
}

interface Props {
	title: string;
	person: Person;
}

const Task: React.FC<Props> = ({ title, person, children }) => {
	const [current, send] = useMachine(taskMachine);
	console.log(current);

	return <div
		className={`${css.task} ${current.value == "Open" ? css.open : css.closed}`}
		onClick={() => send("Toggle")}>
		<Bear />
		<span>{title}</span>	
		<section>{children}</section>
	</div>;
}

export default Task;
