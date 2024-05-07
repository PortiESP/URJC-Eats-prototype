import scss from '@/styles/requirement.module.scss';

export default function Requirement({requirement: data}){
    return (
        <div className={scss.wrapper}>
            <h3>{data.code && <>[{data.code}] - </>}{data.title}</h3>
            <hr />
            <p>{data.description}</p>
        </div>
    )
}