import * as Styled from './styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import imagemLogo from '../../images/funko-logo-principal.png';

import { TextInputSearch } from '../../components/TextInputSearch';
import { Button } from '../../components/Button';
import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts';

export const ListarFunkos = () => {
    //delcaração dos estados
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const [Input, setInput] = useState('');

    const handlePosts = useCallback(async (page, postsPerPage) => {
        const Posts = await loadPosts();

        setPosts(Posts.slice(page, postsPerPage));
        setAllPosts(Posts);
    }, []);

    useEffect(() => {
        handlePosts(0, postsPerPage);
    }, [handlePosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const btnClick = () => {
        if (Input === "") {
            alert("Preencha o campo para pesquisar!");
            return;
        }
        setSearchValue(Input);
    };

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue ? allPosts.filter((post) => {
        return post.name.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
        <Styled.Container>
            <img src={imagemLogo} alt="logo escrito funko em azul" width={450} height={175} className="flutuante"/>
            <TextInputSearch searchValue={Input} handleChange={handleChange} onClick={btnClick}/>

            {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

            {filteredPosts.length === 0 && (
                <Styled.NotFound>
                    <p>Nenhum funko encontrado</p>
                </Styled.NotFound>
            )}

            <Styled.Button>
                {!searchValue && <Button text="Ver mais +" onClick={loadMorePosts} disabled={noMorePosts} />}
            </Styled.Button>
        </Styled.Container>
    );
};
