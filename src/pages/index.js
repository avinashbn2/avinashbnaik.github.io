import React, { useState, useEffect } from "react"
import Text from "../components/Text"
import config from "../utils/config"
import Flex from "../components/Flex"
import { FaGithub, FaStackOverflow } from "react-icons/fa"
import Container from "../components/Container"
import "../styles/index.scss"
import { Link } from "gatsby"
export default () => {
  const skills = Object.keys(config.skills)
  const [currentSkill, setCurrentSkill] = useState({
    skill: skills[0],
    index: 0,
  })
  function updateSkill() {
    setTimeout(() => {
      if (currentSkill.index < skills.length - 1) {
        setCurrentSkill({
          skill: skills[currentSkill.index + 1],
          index: currentSkill.index + 1,
        })
      } else {
        setCurrentSkill({
          index: 0,
          skill: skills[0],
        })
      }
    }, 2000)
  }
  useEffect(() => {
    updateSkill()
  }, [currentSkill.index])
  return (
    <Container>
      <div className="brand">
        <div className="name">
          <Text text={config.name} size="5rem" />
        </div>
        <div className="name">
          <Text text={config.description} size="1rem" />
        </div>
      </div>
      <Text className="name p1" text="Tech Stack" size="3rem" />

      <div className="skillitemcontainer">
        <div>
          <Flex className="skillItem" jc="space-around" mw="800px">
            <Flex dir="column" width="200px">
              <Text
                className="name"
                text={currentSkill.skill}
                size="3rem"
                key={currentSkill.skill}
              />
            </Flex>
            <Flex
              height="200px"
              width="200px"
              dir="column"
              jc="center"
              ai="flex-start"
            >
              {config.skills &&
                config.skills[currentSkill.skill].map(skill => (
                  <div className="name">
                    <Text text={skill} key={skill} size="2rem"></Text>
                  </div>
                ))}
            </Flex>
          </Flex>
        </div>
      </div>
      <div className="name footer">
        <a href={config.footer.urls[0]} target="_blank" className="link">
          <FaGithub className="icon" />
        </a>

        <a href={config.footer.urls[1]} target="_blank" className="link">
          <FaStackOverflow className="icon" />
        </a>
      </div>
    </Container>
  )
}
