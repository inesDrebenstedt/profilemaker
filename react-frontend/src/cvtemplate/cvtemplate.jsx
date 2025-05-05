import React from 'react';
import { Container, Typography, Box, Link, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';

// Skills data
const skills = [
  { name: 'Java', level: 'Pro' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'C#', level: 'Beginner' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Spring Boot', level: 'Pro' },
  { name: '.NET', level: 'Beginner' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Beginner' },
  { name: 'AWS Cloud Services', level: 'Pro' },
  { name: 'Azure Cloud Platforms', level: 'Beginner' },
  { name: 'Docker', level: 'Pro' },
  { name: 'Kubernetes', level: 'Beginner' },
  { name: 'Jenkins', level: 'Intermediate' },
  { name: 'Git', level: 'Pro' },
  { name: 'Jira', level: 'Pro' },
  { name: 'Security & Compliance Standards (FISMA, FedRAMP)', level: 'Pro' },
  { name: 'Data Privacy & GDPR', level: 'Intermediate' },
];

// Styled components
const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const SkillTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const CVStyled = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        fontFamily: 'Arial, sans-serif',
        padding: 4,
        textAlign: 'left', // added this line to align all text to the left
      }}
    >
      {/* Header */}
      <Box mb={2}>
        <Typography variant="h3" gutterBottom>
          John Doe
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: johndoe@email.com | Phone: (123) 456-7890 |{' '}
          <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>{' '}
          |{' '}
          <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location: San Francisco, CA
        </Typography>
      </Box>

      {/* Sections */}
      <Section>
        <Title variant="h5">Professional Summary</Title>
        <Typography variant="body1">
          Experienced Software Engineer and Technology Consultant with 5 years of delivering scalable,
          secure, and compliant software solutions for diverse clients, including government agencies
          and public sector organizations. Skilled in translating complex requirements into actionable
          technical strategies, fostering stakeholder collaboration, and ensuring adherence to regulatory
          standards. Adept at leading cross-functional teams, managing projects, and providing strategic
          guidance to support digital transformation initiatives.
        </Typography>
      </Section>

      <Section>
        <Title variant="h5">Core Competencies</Title>
        <ul>
          <li>Public Sector & Government Compliance (FISMA, FedRAMP, GDPR)</li>
          <li>Software Development & System Integration</li>
          <li>Stakeholder Engagement & Requirements Gathering</li>
          <li>Cloud Solutions & Security (AWS, Azure)</li>
          <li>Agile & Waterfall Project Management</li>
          <li>Data Privacy & Security Best Practices</li>
          <li>Technical Documentation & Training</li>
        </ul>
      </Section>

      <Section>
        <Title variant="h5">Professional Experience</Title>
        <Box mb={2}>
          <Typography variant="h6">Technology Consultant & Software Engineer</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            XYZ Tech Solutions – San Francisco, CA | June 2021 – Present
          </Typography>
          <ul>
            <li>Led multiple public sector projects, developing secure web applications and APIs aligned with government standards.</li>
            <li>Collaborated closely with government agencies to gather requirements, ensuring compliance with security and accessibility standards.</li>
            <li>Provided strategic guidance on cloud migrations to AWS, enhancing system scalability and security.</li>
            <li>Conducted security assessments and implemented best practices for data protection and regulatory compliance.</li>
            <li>Facilitated stakeholder workshops and training sessions to ensure successful adoption and integration of new systems.</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h6">Software Developer</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            ABC Software Inc. – San Francisco, CA | June 2018 – May 2021
          </Typography>
          <ul>
            <li>Developed backend services with Java and Spring Boot supporting client projects, including public sector clients requiring high security.</li>
            <li>Participated in requirements analysis and solution design for government contracts, ensuring adherence to relevant standards.</li>
            <li>Worked within Agile teams to deliver features on schedule, contributing to increased client satisfaction and project success.</li>
            <li>Implemented testing protocols and documentation to meet compliance and audit requirements.</li>
          </ul>
        </Box>
      </Section>

      {/* Education */}
      <Section>
        <Title variant="h5">Education</Title>
        <Typography variant="body1" gutterBottom>
          <strong>Bachelor of Science in Computer Science</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          University of California, Berkeley | Graduated May 2018
        </Typography>
      </Section>

      {/* Certifications */}
      <Section>
        <Title variant="h5">Certifications</Title>
        <ul>
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>Certified ScrumMaster (CSM)</li>
          <li>Certified Information Systems Security Professional (CISSP)</li>
          <li>Federal Information Security Management Act (FISMA) Awareness Certification</li>
        </ul>
      </Section>

      {/* Selected Projects & Engagements */}
      <Section>
        <Title variant="h5">Selected Projects & Engagements</Title>
        <ul>
          <li>
            <strong>Public Sector Cloud Migration:</strong> Led a federal agency’s migration to AWS, ensuring compliance with FedRAMP standards and improving system resilience.
          </li>
          <li>
            <strong>e-Government Portal Enhancement:</strong> Collaborated with local government to redesign their citizen portal, improving accessibility and security.
          </li>
          <li>
            <strong>Data Privacy Initiative:</strong> Implemented GDPR-compliant data handling processes for a state government project, safeguarding citizen information.
          </li>
        </ul>
      </Section>

      {/* Professional Development & Training */}
      <Section>
        <Title variant="h5">Professional Development & Training</Title>
        <ul>
          <li>Public Sector IT Standards & Compliance Workshop</li>
          <li>Cloud Security Best Practices Seminar</li>
        </ul>
      </Section>

      {/* Skills & Proficiency Levels */}
      <Section>
        <Title variant="h5">Skills & Proficiency Levels</Title>
        <SkillTable>
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </SkillTable>
      </Section>
    </Container>
  );
};

export default CVStyled;