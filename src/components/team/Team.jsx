
import TeamItem from './TeamItem'

const Team = () => {
    return (
        <section>
            <div className="container my-5">
                <h2 className='text-center' id="team">Team</h2>
                <div className="row">
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                </div>
            </div>
        </section>
    )
}

export default Team