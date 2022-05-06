import React from "react";
import { Grid, Header, Segment, List } from "semantic-ui-react";
import me from "./me.png";
import mongo from "./mongodb.jpg";
import node from "./nodejs.png";
import firebase from "./firebase.png";
import react from "./react.png";
import sql from "./sql.png";
import golang from './go.png'
import tailwind from "./tailwind.png";
import semantic from "./semantic.png";
export { me, mongo, node, firebase, react };
export const data = [
	{
		img: react,
		item: "React",
	},
	{
		img: semantic,
		item: "Semantic UI",
	},
	{
		img: tailwind,
		item: "Tailwind Css",
	},
  {
    img:golang, 
    item:"Golang"
  },
	{
		img: node,
		item: "NodeJs",
	},
	{
		img: mongo,
		item: "Mongo DB",
	},
	{
		img: firebase,
		item: "Firebase",
	},
	{
		img: sql,
		item: "MySQL",
	},
];

export const projects = [
	{
		img: me,
		meta: "My Startup (October 2019 - Present)",
		header: "Logic Kids Ghana",
		content: `I'm passionate about training kids to code. 
    I'm currently running this program to provide coding skills to kids from 6-12 years
    ... Wish me Success!😊`,
		link: "https://thelogickids.com",
	},
	{
		img: me,
		meta: "(React & Firebase)",
		header: "School Management System",
		content: (
			<Grid  padded centered stackable columns={3}>
				<Grid.Column >
					<Segment style={{border:"2px solid #cccfff"}}>
						<Header
							as="a"
							href="https://admin.thelogickids.com"
							target="_blank"
							rel="noreferrer noopener"
							content="Administrator"
						/>
						<List size="medium" relaxed="very" verticalAlign="middle">
							<List.Item>
								<List.Icon name="sticky note" />
								<List.Content>
									<List.Description>
										Register profiles, broadcast messages via email and SMS ,
										generate PDF reports
									</List.Description>
									<List.List as={List} relaxed>
										<List.Item as="a" href="https://admin.thelogickids.com">
											<List.Icon name="globe" />
											<List.Content
												header="Link"
												description="https://admin.thelogickids.com"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="terminal" />
											<List.Content
												header="Access Code"
												description="GUESTUSER"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="envelope" />
											<List.Content
												header="E-mail"
												description="admin@logickids.com"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="protect" />
											<List.Content header="Password" description="gue$tU$er" />
										</List.Item>
									</List.List>
								</List.Content>
							</List.Item>
						</List>
					</Segment>
				</Grid.Column>

				<Grid.Column >
					<Segment style={{border:"2px solid #cccfff"}}>
						<Header
							as="a"
							href="https://staff.thelogickids.com"
							target="_blank"
							rel="noreferrer noopener"
							content="Staff Portal"
						/>
						<List size="medium" relaxed="very" verticalAlign="middle">
							<List.Item>
								<List.Icon name="sticky note" />
								<List.Content>
									<List.Description>
										Mark student attendance, process exams reports, give
										assignments and more...
									</List.Description>
									<List.List as={List} relaxed>
										<List.Item as="a" href="https://staff.thelogickids.com">
											<List.Icon name="globe" />
											<List.Content
												header="Link"
												description="https://staff.thelogickids.com"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="user" />
											<List.Content
												header="Staff ID"
												description="LOGIC-ST-001"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="protect" />
											<List.Content header="Password" description="gue$tU$er" />
										</List.Item>
									</List.List>
								</List.Content>
							</List.Item>
						</List>
					</Segment>
				</Grid.Column>
				<Grid.Column >
					<Segment style={{border:"2px solid #cccfff"}}>
						<Header
							as="a"
							href="https://portal.thelogickids.com"
							target="_blank"
							rel="noreferrer noopener"
							content="Student Portal"
						/>
						<List size="medium" relaxed="very" verticalAlign="middle">
							<List.Item>
								<List.Icon name="sticky note" />
								<List.Content>
									<List.Description>
										Access time tables, reports, news, assignments, fees history
										and more
									</List.Description>
									<List.List as={List} relaxed>
										<List.Item as="a" href="https://portal.thelogickids.com">
											<List.Icon name="globe" />
											<List.Content
												header="Link"
												description="https://portal.thelogickids.com"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="user" />
											<List.Content
												header="Student ID"
												description="LOGIC-00-001"
											/>
										</List.Item>

										<List.Item>
											<List.Icon name="protect" />
											<List.Content header="Password" description="gue$tU$er" />
										</List.Item>
									</List.List>
								</List.Content>
							</List.Item>
						</List>
					</Segment>
				</Grid.Column>
			</Grid>
		),
		link: "https://admin.thelogickids.com",
	},
  {
    img: me,
    header:"Fake JSON Samples Generator", 
    meta: "Hobby Project (Python)",
    content:"Generate fake json samples for users, todos, posts, comments and products for projects",
    link:"https://github.com/bill-greatness/generate-samples"
  },
  {
	  img:me, 
	  header:"Greater Heights School Website",
	  meta: "Freeland (ReactJs & TailwindCSS)",
	  content: "Work in progress about (75%) done",
	  link:"https://g-heights.web.app"
  },
	{
		img: me,
		meta: "Freelance (ReactJs & Semantic-UI)",
		header: "Western Region School",
		content:
			"Basic Website with limited features for Western Region International School!",
		link: "https://wrisgh.com",
	},
	{
		img: me,
		meta: "Joint Project (React & Firebase)",
		header: "Eyepa Stores",
		content: `A collaborative Project designed under pressure for
     Delivery Management.`,
		link: "https://github.com/nanakay-dev/eyepa-store",
	},
];
