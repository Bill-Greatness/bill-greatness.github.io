import React from "react";
import {
	Grid,
	Header,
	Segment,
	Tab,
	Image,
	Item,
	List,
	Icon,
	Button,
} from "semantic-ui-react";
import { me, data, projects } from "../data";

export default function Info() {
	const panes = [
		{
			menuItem: "Projects",
			render: () => (
				<Tab.Pane className="panes">
					<Item.Group>
						{projects.map((dt, idx) => (
							<Item key={idx}>
								<Item.Content>
									<Item.Header>{dt.header}</Item.Header>
									<Item.Meta>{dt.meta}</Item.Meta>
									<Item.Description>
										<p>{dt.content}</p>
									</Item.Description>
									<Item.Extra>
										<Icon color="green" name="linkify" />
										<a href={dt.link}>Visit Project</a>
									</Item.Extra>
								</Item.Content>
							</Item>
						))}
					</Item.Group>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Skill Set",
			render: () => (
				<Tab.Pane className="panes">
					<List relaxed horizontal>
						{data.map((dt, idx) => (
							<List.Item key={idx} style={{padding:20}}>
								<Image avatar src={dt.img} />
								<List.Content verticalAlign="middle">
									<List.Header>{dt.item}</List.Header>
								</List.Content>
							</List.Item>
						))}
					</List>
					<br />
					<p style={{ textAlign: "center" }}>
						I'm currently learning Docker!
					</p>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Misc",
			render: () => (
				<Tab.Pane className="panes">
					<Header content="About Me" />
					<p>
						Coding Instructor, I'm a fullstack developer who likes to work on
						collaborative projects.
					</p>
          <p>Favorite Quote: Randomness will decide the outcome of every breathe!</p>
					<Button size="mini" color="green">
						<a style={{color:'white', fontSize:14}} href="mailto:billgreatness@outlook.com?subject=Looked at your Portfolio Website&body=I would like to assign you on a project.">Available for Hire</a>
					</Button>
					<Header content="Aspirations" />
					<p>
						I'm looking forward to contribute to Open Source projects and
						inspire many kids to learn to code.
					</p>
					<Header content="Projections" />
					<p>
						I'm positive that one day, all these dots will connect.
						<span aria-label="Smile" role="img">
							😊
						</span>
						<br />
						<br />I hope to grow up as decent as I am today!
					</p>
				</Tab.Pane>
			),
		},
	];
	return (
		<Grid padded centered >
			<Grid.Column computer={16} mobile={16} tablet={16}>
				<Segment
        className="section"
					raised
					style={{ minHeight: "70vh", border: "2px solid #cccfff" }}
				>
					<Image circular size="small" centered src={me} />
					<Header
						textAlign="center"
						as="h1"
						content="Debrah, Bill Clinton"
						subheader="FullStack Developer"
					/>
					<div className="social">
						<a
							href="https://github.com/bill-greatness"
							style={{ color: "black" }}
						>
							<Icon name="github" size="big" />
						</a>
						<a href="https://stackoverflow.com/users/10958531/bill-greatness">
							<Icon name="stack overflow" color="orange" size="big" />
						</a>
						<a href="https://linkedin.com/in/bill-clinton-debrah-086278196">
							<Icon name="linkedin" color="blue" size="big" />
						</a>
					</div>
					<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
				</Segment>
			</Grid.Column>
		</Grid>
	);
}
