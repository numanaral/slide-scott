/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
	${({ theme }) => `
		color: ${theme.palette.text.primary};
	`}
`;

const Resources = () => {
	return (
		<Wrapper>
			<div className="main__content">
				<div className="main__link">
					<a href="https://www.refseek.com/directory/teacher_resources.html">
						Source
					</a>
				</div>
				<h1 className="page-title">Educator Resources</h1>
				<div className="page-summary">
					<p>
						RefSeek's guide to the 25 best sites for free teacher
						resources. All listed sites offer lessons, classroom
						activities, and printouts for free though most require
						account registration.
					</p>
					<p className="page-related">
						Related guide:{' '}
						<a href="/directory/educational_videos.html">
							Educational Videos
						</a>
					</p>
				</div>
				<section id="teacher_resources">
					<ul className="results">
						<li className="result">
							<div className="result__image">
								<a href="http://www.adlit.org" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/adlit.png"
										alt="AdLit.org"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="http://www.adlit.org"
										rel="nofollow"
									>
										AdLit.org
									</a>
								</div>
								<div className="result__description">
									Adolescent literacy resources for parents
									and educators of kids in grades 4-12.
								</div>
								<div className="result__details">
									<span className="result__domain">
										adlit.org
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.brainscape.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/brainscape.png"
										alt="Brainscape"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.brainscape.com/"
										rel="nofollow"
									>
										Brainscape
									</a>
								</div>
								<div className="result__description">
									Browse flashcards sets or create your own
									and share them with students.
								</div>
								<div className="result__details">
									<span className="result__domain">
										brainscape.com
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.classdojo.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/classdojo.png"
										alt="ClassDojo"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.classdojo.com/"
										rel="nofollow"
									>
										ClassDojo
									</a>
								</div>
								<div className="result__description">
									Classroom communication and collaboration
									app connecting teachers, parents, and
									students.
								</div>
								<div className="result__details">
									<span className="result__domain">
										classdojo.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.discoveryeducation.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/discovery.png"
										alt="Discovery Education"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.discoveryeducation.com/"
										rel="nofollow"
									>
										Discovery Education
									</a>
								</div>
								<div className="result__description">
									Lesson plans, student activities, and video
									clips for teachers.
								</div>
								<div className="result__details">
									<span className="result__domain">
										discoveryeducation.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.edhelper.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/edhelper.png"
										alt="Ed Helper"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.edhelper.com/"
										rel="nofollow"
									>
										Ed Helper
									</a>
								</div>
								<div className="result__description">
									Teacher resources organized by subject
									matter and grade.
								</div>
								<div className="result__details">
									<span className="result__domain">
										edhelper.com
									</span>{' '}
									- Grade: K-9
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="https://edshelf.com/" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/edshelf.png"
										alt="EdShelf"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://edshelf.com/"
										rel="nofollow"
									>
										EdShelf
									</a>
								</div>
								<div className="result__description">
									Socially-curated directory of education
									websites, mobile apps, and desktop programs.
								</div>
								<div className="result__details">
									<span className="result__domain">
										edshelf.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://edsitement.neh.gov/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/edsitement.png"
										alt="EDSITEment"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://edsitement.neh.gov/"
										rel="nofollow"
									>
										EDSITEment
									</a>
								</div>
								<div className="result__description">
									Information on the humanities for parents,
									students, and teachers.
								</div>
								<div className="result__details">
									<span className="result__domain">
										edsitement.neh.gov
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.educationworld.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/educationworld.png"
										alt="Education World"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.educationworld.com/"
										rel="nofollow"
									>
										Education World
									</a>
								</div>
								<div className="result__description">
									Offers lesson plans, educator profiles,
									daily columns, and more.
								</div>
								<div className="result__details">
									<span className="result__domain">
										educationworld.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.edutopia.org/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/edutopia.png"
										alt="Edutopia"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.edutopia.org/"
										rel="nofollow"
									>
										Edutopia
									</a>
								</div>
								<div className="result__description">
									Parenting tips and advice as well as
									educational activities and ideas.
								</div>
								<div className="result__details">
									<span className="result__domain">
										edutopia.org
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.hippocampus.org/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/hippocampus.png"
										alt="HippoCampus"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.hippocampus.org/"
										rel="nofollow"
									>
										HippoCampus
									</a>
								</div>
								<div className="result__description">
									Multimedia lessons and course materials to
									assist students in self-study.
								</div>
								<div className="result__details">
									<span className="result__domain">
										hippocampus.org
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="https://kahoot.com" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/kahoot.png"
										alt="Kahoot"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a href="https://kahoot.com" rel="nofollow">
										Kahoot
									</a>
								</div>
								<div className="result__description">
									Free game-based classroom learning platform
									that make.
								</div>
								<div className="result__details">
									<span className="result__domain">
										kahoot.com
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.learninga-z.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/learningaz.png"
										alt="Learning A-Z (Subscription)"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.learninga-z.com/"
										rel="nofollow"
									>
										Learning A-Z (Subscription)
									</a>
								</div>
								<div className="result__description">
									Source for a broad selection of professional
									online curriculum materials.
								</div>
								<div className="result__details">
									<span className="result__domain">
										learninga-z.com
									</span>{' '}
									- Grade: K-6
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.oercommons.org/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/oer.png"
										alt="Open Educational Resources"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.oercommons.org/"
										rel="nofollow"
									>
										Open Educational Resources
									</a>
								</div>
								<div className="result__description">
									Network where teachers and professors can
									access and share course materials.
								</div>
								<div className="result__details">
									<span className="result__domain">
										oercommons.org
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="http://www.open.edu/openlearn/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/openlearn.png"
										alt="OpenLearn"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="http://www.open.edu/openlearn/"
										rel="nofollow"
									>
										OpenLearn
									</a>
								</div>
								<div className="result__description">
									Free access to Open University course
									materials.
								</div>
								<div className="result__details">
									<span className="result__domain">
										open.edu
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.pbslearningmedia.org/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/pbs.png"
										alt="PBS Learning Media"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.pbslearningmedia.org/"
										rel="nofollow"
									>
										PBS Learning Media
									</a>
								</div>
								<div className="result__description">
									High quality classroom materials for preK-12
									education.
								</div>
								<div className="result__details">
									<span className="result__domain">
										pbslearningmedia.org
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="http://quizlet.com" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/quizlet.png"
										alt="Quizlet"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a href="http://quizlet.com" rel="nofollow">
										Quizlet
									</a>
								</div>
								<div className="result__description">
									Well designed site where students can create
									and share flash card sets.
								</div>
								<div className="result__details">
									<span className="result__domain">
										quizlet.com
									</span>{' '}
									- Grade: K-6
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.readingrockets.org/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/readingrockets.png"
										alt="Reading Rockets"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.readingrockets.org/"
										rel="nofollow"
									>
										Reading Rockets
									</a>
								</div>
								<div className="result__description">
									Research-based strategies for helping young
									children become strong, confident readers.
								</div>
								<div className="result__details">
									<span className="result__domain">
										readingrockets.org
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="http://www.readwritethink.org"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/rwt.png"
										alt="ReadWrite Think"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="http://www.readwritethink.org"
										rel="nofollow"
									>
										ReadWrite Think
									</a>
								</div>
								<div className="result__description">
									Lesson plans, student interactives, and
									professional development resources.
								</div>
								<div className="result__details">
									<span className="result__domain">
										readwritethink.org
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="http://www.scholastic.com/teachers"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/scholastic.png"
										alt="Scholastic For Teachers"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="http://www.scholastic.com/teachers"
										rel="nofollow"
									>
										Scholastic For Teachers
									</a>
								</div>
								<div className="result__description">
									Lesson plans, student activities, and video
									clips for teachers.
								</div>
								<div className="result__details">
									<span className="result__domain">
										scholastic.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="https://socrative.com/" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/socrative.png"
										alt="Socrative"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://socrative.com/"
										rel="nofollow"
									>
										Socrative
									</a>
								</div>
								<div className="result__description">
									Assess students with activities or real time
									questions for insight into student
									understanding
								</div>
								<div className="result__details">
									<span className="result__domain">
										socrative.com
									</span>{' '}
									- Grade: K-12, Classroom Management
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.superteacherworksheets.com"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/stw.png"
										alt="Super Teacher Worksheets"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.superteacherworksheets.com"
										rel="nofollow"
									>
										Super Teacher Worksheets
									</a>
								</div>
								<div className="result__description">
									Printable worksheets and activities for
									teachers, parents, tutors, and homeschool
									families.
								</div>
								<div className="result__details">
									<span className="result__domain">
										superteacherworksheets.com
									</span>{' '}
									- Grade: K-6
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="http://superstaar.org/" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/superstaar.png"
										alt="SuperSTAAR"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="http://superstaar.org/"
										rel="nofollow"
									>
										SuperSTAAR
									</a>
								</div>
								<div className="result__description">
									Science teaching and assessment resources
									from Baylor College of Medicine.
								</div>
								<div className="result__details">
									<span className="result__domain">
										superstaar.org
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.teachervision.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/teachervision.png"
										alt="Teacher Vision"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.teachervision.com/"
										rel="nofollow"
									>
										Teacher Vision
									</a>
								</div>
								<div className="result__description">
									Classroom-ready lesson plans, printables,
									and resources.
								</div>
								<div className="result__details">
									<span className="result__domain">
										teachervision.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.teachersfirst.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/teachersfirst.png"
										alt="Teachers First"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.teachersfirst.com/"
										rel="nofollow"
									>
										Teachers First
									</a>
								</div>
								<div className="result__description">
									Collection of lessons, units, and web
									resources in a user-friendly and ad-free
									format.
								</div>
								<div className="result__details">
									<span className="result__domain">
										teachersfirst.com
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="https://teachers.net/" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/teachersnet.png"
										alt="Teachers.net"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://teachers.net/"
										rel="nofollow"
									>
										Teachers.net
									</a>
								</div>
								<div className="result__description">
									Social tools, lesson plans, and advice
									column for teachers.
								</div>
								<div className="result__details">
									<span className="result__domain">
										teachers.net
									</span>
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.teach-nology.com/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/teachnology.png"
										alt="Teachnology"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a href="https://www.teach-nology.com/">
										Teachnology
									</a>
								</div>
								<div className="result__description">
									Online resources for educators including
									worksheets, lesson plans, rubrics, and more.
								</div>
								<div className="result__details">
									<span className="result__domain">
										teach-nology.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a href="https://ed.ted.com/" rel="nofollow">
									<img
										src="https://www.refseek.com/data/logos/ted.png"
										alt="TED Ed"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://ed.ted.com/"
										rel="nofollow"
									>
										TED Ed
									</a>
								</div>
								<div className="result__description">
									Build a lesson around any TED-Ed Original,
									TED Talk or YouTube video.
								</div>
								<div className="result__details">
									<span className="result__domain">
										ed.ted.com
									</span>{' '}
									- Grade: K-12
								</div>
							</div>
						</li>
						<li className="result">
							<div className="result__image">
								<a
									href="https://www.wnet.org/education/"
									rel="nofollow"
								>
									<img
										src="https://www.refseek.com/data/logos/pbs.png"
										alt="WNET Education"
									/>
								</a>
							</div>
							<div className="result__snippet">
								<div className="result__title">
									<a
										href="https://www.wnet.org/education/"
										rel="nofollow"
									>
										WNET Education
									</a>
								</div>
								<div className="result__description">
									Lesson plans, classroom activities,
									multimedia, and links to curriculum-based
									sites.
								</div>
								<div className="result__details">
									<span className="result__domain">
										wnet.org
									</span>
								</div>
							</div>
						</li>
					</ul>
					<section>
						<section id="teacher_resources-professional-development">
							<h2 className="page-subtitle">
								Professional Development
							</h2>
							<ul className="results">
								<li className="result">
									<div className="result__image">
										<a
											href="http://www.academia.edu/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/academia.png"
												alt="Academia.edu"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="http://www.academia.edu/">
												Academia.edu
											</a>
										</div>
										<div className="result__description">
											Social network for academics.
											Connect and share research.
										</div>
										<div className="result__details">
											<span className="result__domain">
												academia.edu
											</span>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="https://www.britishcouncil.org/school-resources"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/britishcouncil.png"
												alt="British Council"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a
												href="https://www.britishcouncil.org/school-resources"
												rel="nofollow"
											>
												British Council
											</a>
										</div>
										<div className="result__description">
											Organization for cultural relations
											and educational opportunities.
										</div>
										<div className="result__details">
											<span className="result__domain">
												britishcouncil.org
											</span>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="https://eric.ed.gov/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/eric3.png"
												alt="ERIC"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="https://eric.ed.gov/">
												ERIC
											</a>
										</div>
										<div className="result__description">
											More than one million journal
											articles and other education-related
											materials.
										</div>
										<div className="result__details">
											<span className="result__domain">
												eric.ed.gov
											</span>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="https://www.learner.org/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/learner.png"
												alt="Learner.org"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="https://www.learner.org/">
												Learner.org
											</a>
										</div>
										<div className="result__description">
											Teacher resources and professional
											development programming across the
											curriculum.
										</div>
										<div className="result__details">
											<span className="result__domain">
												learner.org
											</span>{' '}
											- Grade: K-12
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="http://ncte.org/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/ncte.png"
												alt="National Council of Teachers of English (NCTE)"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="http://ncte.org/">
												National Council of Teachers of
												English (NCTE)
											</a>
										</div>
										<div className="result__description">
											Professional development resources
											for English teachers.
										</div>
										<div className="result__details">
											<span className="result__domain">
												ncte.org
											</span>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="https://www.nctm.org/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/nctm.png"
												alt="National Council of Teachers of Mathematics (NCTM)"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="https://www.nctm.org/">
												National Council of Teachers of
												Mathematics (NCTM)
											</a>
										</div>
										<div className="result__description">
											Professional and classroom resources
											for math teachers.
										</div>
										<div className="result__details">
											<span className="result__domain">
												nctm.org
											</span>{' '}
											- Also see:{' '}
											<a href="http://illuminations.nctm.org">
												Illuminations
											</a>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="http://www.nea.org/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/nea.png"
												alt="National Education Association"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="http://www.nea.org/">
												National Education Association
											</a>
										</div>
										<div className="result__description">
											Committed to advancing the cause of
											public education.
										</div>
										<div className="result__details">
											<span className="result__domain">
												nea.org
											</span>
										</div>
									</div>
								</li>
								<li className="result">
									<div className="result__image">
										<a
											href="https://www.ed.gov/"
											rel="nofollow"
										>
											<img
												src="https://www.refseek.com/data/logos/edgov.png"
												alt="U.S. Department of Education"
											/>
										</a>
									</div>
									<div className="result__snippet">
										<div className="result__title">
											<a href="https://www.ed.gov/">
												U.S. Department of Education
											</a>
										</div>
										<div className="result__description">
											Educator resources from several
											federal agencies.
										</div>
										<div className="result__details">
											<span className="result__domain">
												ed.gov
											</span>
										</div>
									</div>
								</li>
							</ul>
						</section>
					</section>
				</section>
			</div>
		</Wrapper>
	);
};

export default Resources;
