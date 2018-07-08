package com.uparis.mvc;

import com.uparis.db.repo.TagRepository;
import com.uparis.dto.TagDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tag")
public class TagController {

    @Autowired
    private TagRepository repoTag;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<TagDto> getTags() {
        return repoTag.findAll().stream()
                .map(tagPo -> modelMapper.map(tagPo, TagDto.class))
                .collect(Collectors.toList());
    }
}
